<script setup>
import { useRouter, useRoute } from 'vue-router';
import useTestStore from '~/store/TestStore';

const router = useRouter();
const route = useRoute();

const testStore = useTestStore();

const selectedOption = ref(null);
const path = ref(route.fullPath);

const prices = reactive({
  viewResults: 1000,
  viewAndDownloadResults: 1000,
})
const price = computed (() => {
  return prices[selectedOption.value] || 0;
});
console.log('path', path.value)
function viewResults() {
  testStore.setCurrentPath(path.value)
  console.log(path.value)
  selectedOption.value = 'viewResults';
  alert('esto se guardo: ', path.value)
}

function viewAndDownloadResults() {
  selectedOption.value = 'viewAndDownloadResults';
  testStore.setCurrentPath(path.value);
  alert('esto se guardo: ', path.value)
}

function cancel() {
  selectedOption.value = null; 
  router.push('/');
}
</script>

<template>
  <div class="test-options-container">
    <h1 class="title">Elige una opción</h1>
    <button 
      @click="viewResults" 
      class="option-button">
      Ver Resultados ($10)
    </button>
    <button 
      @click="viewAndDownloadResults" 
      class="option-button">
      Ver Resultados y Descargar ($10)
    </button>
    <button 
      @click="cancel" 
      class="option-button cancel-button">
      Cancelar
    </button>
  </div>
  <div class="container">
    <p class="container-indication">Después de haber escogido cancela aquí abajo</p>
    <PaymentButton
      v-if="price > 0"
      :price="price" />
  </div>
</template>

<style scoped lang="scss">
.test-options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  &-indication {
    font-size: $body-font-size;
  }
}

.title {
  margin-bottom: 30px;
}

.option-button {
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e6e6e6;
  }
}

.cancel-button {
  background-color: #ffcccc;
  &:hover {
    background-color: #ffaaaa;
  }
}
</style>
