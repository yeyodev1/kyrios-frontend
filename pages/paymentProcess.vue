<script setup lang="ts">
import { useRoute } from 'vue-router';
import useUserStore from '~/store/UserStore';

const config = useRuntimeConfig()

const userStore = useUserStore();

const route = useRoute()

const router = useRouter();

const isLoading = ref(true);
const resultText = ref('');
const message = ref('');

const transaccion = computed(() => parseInt(route.query.id as string));
const client = computed(() => route.query.clientTransactionId as string);

const data = JSON.stringify({
  id: transaccion.value,
  clientTxId: client.value,
});

onMounted(async () => {
  try {
    const result = await fetch('https://pay.payphonetodoesposible.com/api/button/V2/Confirm', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.public.payphoneToken}`,
        'Content-type': 'application/json',
      },
      body: data,
    });
    const response = await result.json();
    isLoading.value = false;

    if (response.transactionStatus === 'Approved') {
      resultText.value = 'Tu pago fue correctamente realizado'
    }
    
    if (response.transactionStatus === 'Canceled') {
      resultText.value = 'Tu pago fue cancelado. Por favor escoge otro método de pago u otra tarjeta';
      console.log('error en el pago y estado de la transaccion es cancelado')
    }
  } catch (error) {
    console.error(error);
    resultText.value = 'ooppp Algo ocurrio con el pago, contacta con Terranet Soporte';
  }
});

watch(() => userStore.user, async (newUser, oldUser) => {
  if (newUser) {
    await nextTick();
    try {
      const testAccessLevel = await userStore.getUserTestAccessLevel(newUser._id!);
      console.log('test access', testAccessLevel)

      if (['viewResults', 'viewAndDownloadResults'].includes(testAccessLevel!)) {
        message.value = 'mira tus resultados aquí';
        router.push('/tests/test/testFinished/testOptions/testgrade');
      } else if (testAccessLevel! === 'downloadTemplate') {
        message.value = 'descarga aquí'
        window.location.href = 'https://servicities.com/blog/wp-content/uploads/2015/03/CONTRATO-DE-DESAROLLO-DE-P%C3%81GINA-WEB.pdf';
      }
    } catch (error) {
      console.error('Error obteniendo el nivel de acceso de prueba del usuario:', error);
    }
  }
}, { immediate: true });

</script>

<template>
  <div class="payment">
    <div
      v-if="isLoading"
      class="payment-loader">
      Cargando...
    </div>
    <div
      v-else
      class="payment-done">
      <p class="message">
        {{ resultText }}
      </p>
      <RouterLink 
        to="/tests/test/testFinished/testOptions/testgrade"
        class="button">
        {{message}}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" setup>
.payment {
  width: 100%;
  display: flex;
  justify-content: center;
  &-done {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .message {
      font-size: $body-font-size;
      margin: 64px;
    }
    .button {
      padding: 12px;
      border-radius: 8px;
      background-color: $green;
      text-decoration: none;
      &:hover{
        background-color: darken($green, 10%);
      }
    }
  }
}
</style>