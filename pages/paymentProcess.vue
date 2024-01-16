<script setup lang="ts">
import { useRoute } from 'vue-router';
import useUserStore from '~/store/UserStore';

const config = useRuntimeConfig()

const userStore = useUserStore();

const route = useRoute()

const isLoading = ref(true);
const resultText = ref('');
const message = ref('');
const path = ref('/')
const file = ref('')
const session = ref({} as any);

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

    session.value = await userStore.getSession();
    console.log(session);
    
    if (session.value.testAccessLevel === 'viewTest' || session.value.testAccessLevel === 'downloadAndViewTest') {
      message.value = 'Presiona para ver tus resultados';
      path.value = '/tests/test/testFinished/testOptions/testgrade'
    } else {
      message.value = 'Descarga tu archivo';
      file.value = 'http://setracoahuila.gob.mx/descargar/Contrato%20tiempo%20indeterminado.pdf';
      window.open(file.value, '_blank');
    }
  } catch (error) {
    console.error(error);
    resultText.value = 'ooppp Algo ocurrio con el pago, contacta con Kyrios Soporte';
  }
});
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
        v-if="session.testAccessLevel === 'viewTest' || session.testAccessLevel === 'downloadAndViewTest'"
        :to="path"
        class="button">
        {{message}}
      </RouterLink>
      <a
        v-else
        :href="file"
        target="_blank"
        download
        class="button">
        Descargar tu archivo
      </a>
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