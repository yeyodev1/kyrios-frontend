<script setup>
import { useRoute, RouterLink } from 'vue-router';
import CrushSelect from '@nabux-crush/crush-select';
import useTestStore from '@/store/TestStore';

const route = useRoute();
const router = useRouter();
const testStore = useTestStore();

const testName = computed(() => route.params.test);
const testIsoType = computed(() => testStore.selectedTest?.isoType || '');
const testResults = ref(testStore.testResults);
const responseOptions = computed(() => testStore.responseOptions.map(option => option.description));

function updateResponse(questionIndex, newValue) {
  const responseIndex = responseOptions.value.findIndex(option => option === newValue);
  if (responseIndex !== -1) {
    testResults.value[questionIndex].userResponse = responseIndex; 
  }
}

async function submitResults() {
  const preparedResults = testResults.value.map(result => ({
    clause: result.clause, 
    questionText: result.questionText,
    answerOptions: result.answerOptions,
    correctAnswer: result.correctAnswer,
    userResponse: responseOptions.value[result.userResponse],
  }));
  console.log('prepared results: ', preparedResults)

  try {
    const payload = {
      isoType: testIsoType.value,
      questions: preparedResults,
    };

    await testStore.submitTestResults(payload);
    router.push(`/${testIsoType.value}/testFinished`);
  } catch (error) {
    console.error('Error al enviar la prueba', error);
  }
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
      <p class="container-result-item">{{ result.questionText }}</p>
      <p class="container-result-item">Respuesta: {{ responseOptions[result.userResponse] }}</p>
      <CrushSelect
        label="Edita tu respuesta"
        :options="responseOptions"
        :value="responseOptions[result.userResponse]"
        @update:value="newValue => updateResponse(index, newValue)" />
    </div>
    <button
      @click="submitResults"
      class="container-result-button">Finalizar</button>
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
