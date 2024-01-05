<script setup lang="ts">
import { onMounted } from 'vue';

const config = useRuntimeConfig();

const props = defineProps({
  price: {
    type: Number,
    required: true
  }
})


const payphoneScriptUrl = `https://pay.payphonetodoesposible.com/api/button/js?appId=${config.public.payphoneAppId}`;
const clientTransactionId = 'transaction' + Date.now();
const currency = 'USD'

async function loadPayphoneScript(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const payphoneScript = document.createElement('script');
    payphoneScript.src = payphoneScriptUrl;
    payphoneScript.onload = () => resolve();
    payphoneScript.onerror = (error) => reject(error);
    document.head.appendChild(payphoneScript);
  });
}

async function initPayment (): Promise<void> {
  try {
    await loadPayphoneScript();

    // @ts-ignore
    const payphoneButton = payphone.Button({
      token: config.public.payphoneToken,
      btnHorizontal: true,
      btnCard: true,
      createOrder: (actions: any) => {
        return actions.prepare({
          amount: props.price,
          amountWithoutTax: props.price,
          currency: currency,
          clientTransactionId: clientTransactionId,
          lang: 'es',
        });
      },
      onComplete: (model: any, actions: any) => {
        return actions.confirm({
          id: model.id,
          clientTxId: model.clientTxId,
        }).then(function (value: any) {
          if (value.transactionStatus == 'Approved') {
            alert('Paso' + value.transactionId + 'recibido, ' + 'estado' + value.transactionStatus);
          }
        }).catch(function(error: any){
          console.error('error: ', error)
        })
      }
    });
    payphoneButton.render("#pp-button");
  } catch (error: any) {
    console.log('eror', error);
  }
}

onMounted(() => {
  if (process.client) {
    localStorage.setItem('is-paying', 'true');
    initPayment();
  }
})
</script>


<template>
  <div class="payment-button-wrapper">
    <div id="pp-button" />
  </div>
</template>

<style lang="scss" scoped>
.payment-button-wrapper {
  width: 100%;
  margin: 0 auto;
}
</style>