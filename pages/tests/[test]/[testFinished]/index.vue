<script setup>
import { useRoute } from 'vue-router';
import CrushSelect from '@nabux-crush/crush-select';

import useTestStore from '@/store/TestStore';
import { routerKey } from 'vue-router';
import { RouterLink } from 'vue-router';

const route = useRoute();
const testStore = useTestStore();

const testName = computed(() => route.params.test);
const testResults = computed(() => testStore.getTestResults());
const responseOptions = computed(() => testStore.responseOptions);

function updateResponse(index, newValue) {
  const value = responseOptions.value.find(option => option.description === newValue)?.value;
  if (value !== undefined) {
    const numericValue = Number(value);
    testResults.value[index].response = numericValue;
    testStore.setResponse(testStore.selectedTest?.id, index, numericValue);
  }
}
function submitResults() {
  console.log('Respuestas finales:', testStore.testResults);
  testStore.setTestResults(testResults.value);
}
</script>

<template>
  <div class="container">
    <h1 class="container-title">{{ testName }}</h1>
    <h2 class="container-subtitle">Esta es tu evaluación; por favor, verifica las respuestas antes de finalizar.</h2>
    <div 
      v-for="(result, index) in testResults" 
      :key="index" 
      class="container-result">
      <p class="container-result-item">{{ result.question }}</p>
      <p class="container-result-item">Respuesta: {{ result.response }}</p>
      <CrushSelect
        label="edita tu respuesta"
        :options="responseOptions.map(option => option.description)"
        :value="result.response.toString()"
        @update:value="newValue => updateResponse(index, newValue)"
        />
    </div>
    <RouterLink
      :to="`${route.params.testFinished}/testgrade`" 
      @click="submitResults"
      class="container-result-button">Finalizar</RouterLink>
  </div>
</template>

<style scoped lang="scss">
$background-color: #F7F7F7; 

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: $background-color;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &-title {
    color: $blue;
    text-align: center;
    margin-bottom: 20px;
    font-size: $body-font-size * 2;
  }
  &-subtitle {
    color: $black;
    text-align: center;
    margin-bottom: 40px;
  }
  &-result {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-wrap: wrap;
    :deep(.form-container-label-select) {
      border: 1px solid $blue;
      cursor: pointer;
    }
    :deep(.form-container-label) {
      color: $black;
    }

    &:last-child {
      border-bottom: none;
    }

    &-item {
      width: 50%;
      margin: 0;
      color: $black;
      font-size: $body-font-size;
      &:first-child {
        font-weight: bold;
      }
      &:last-child {
        float: right;
        background-color: $blue;
        color: white;
        padding: 5px 10px;
        border-radius: 4px;
      }
    }
    &-button {
      display: block;
      width: 100%;
      padding: 15px;
      margin-top: 30px;
      font-size: 1em;
      color: white;
      background-color: $blue;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
      &:hover {
        background-color: darken($blue, 10%);
      }
    }
  }
}
</style>
