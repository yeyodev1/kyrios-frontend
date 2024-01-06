<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

import useTestStore from '~/store/TestStore';

const config = useRuntimeConfig()

const route = useRoute()

const testStore = useTestStore();

const isLoading = ref(true);
const resultText = ref('');

const transaccion = computed(() => parseInt(route.query.id as string));
const client = computed(() => route.query.clientTransactionId as string);

const data = JSON.stringify({
  id: transaccion.value,
  clientTxId: client.value,
});

function redirectLink () {
  const pathSaved = testStore.currentPath;
  console.log("Ruta guardada:", pathSaved);
  return pathSaved;
}

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
        :to="redirectLink"
        class="button">
        Mira tus resultados aquí
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