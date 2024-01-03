<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios'

const router = useRouter();

function viewResults() {
  initiatePayment('Ver resultados');
}

function viewAndDownloadResults() {
  initiatePayment('Ver resultados');
}

function cancel() {
  router.push('/');
}
</script>

<template>
  <div class="test-options-container">
    <h1 class="title">Opciones de Compra</h1>
    <button @click="viewResults" class="option-button">Ver Resultados ($10)</button>
    <button @click="viewAndDownloadResults" class="option-button">Ver Resultados y Descargar ($10)</button>
    <button @click="cancel" class="option-button cancel-button">Cancelar</button>
  </div>
</template>

<style scoped lang="scss">
.test-options-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
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
