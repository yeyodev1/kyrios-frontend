<script setup>
import { useRouter } from 'vue-router';
import useUserStore from '~/store/UserStore';

const router = useRouter();
const userStore = useUserStore();

const selectedOption = ref(null);

const prices = reactive({
  viewResults: 1000,
  viewAndDownloadResults: 1000,
  downloadTemplate: 1000,
})
const price = computed (() => {
  return prices[selectedOption.value] || 0;
});
function viewResults() {
  selectedOption.value = 'viewResults';
  userStore.setUserTestAccessLevel('viewTest');
}

function viewAndDownloadResults() {
  selectedOption.value = 'viewAndDownloadResults';
  userStore.setUserTestAccessLevel('downloadAndViewTest');
}

function improveWithFile() {
  selectedOption.value = 'downloadTemplate';
  userStore.setUserTestAccessLevel('downloadTemplate');
}

function cancel() {
  selectedOption.value = null; 
  router.push('/');
}
</script>

<template>
  <div class="test-options-container">
    <h3 class="title">Elige una opción</h3>
    <button 
      @click="viewResults" 
      :class="{ selected: selectedOption === 'viewResults' }"
      class="option-button">
      Ver Resultados ($10)
    </button>
    <button 
      @click="viewAndDownloadResults" 
      :class="{ selected: selectedOption === 'viewAndDownloadResults' }"
      class="option-button">
      Ver Resultados y Descargar ($10)
    </button>
    <button 
      @click="improveWithFile" 
      :class="{ selected: selectedOption === 'downloadTemplate' }"
      class="option-button">
      Archivo para mejorar ($10)
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

.option-button.selected {
  background-color: $light-blue; 
  color: $white; 
}
</style>
