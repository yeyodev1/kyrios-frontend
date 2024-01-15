<script setup>
import { useRouter, useRoute } from 'vue-router';

import FormIndication from '@/components/FormIndication';
import useTestStore from '@/store/TestStore';

const route = useRoute();
const router = useRouter();

const testStore = useTestStore();

const testIsoType = route.params.test;
const currentQuestionIndex = ref(0);


const selectedTest = computed(() => testStore.tests.find(test => test.isoType === testIsoType));
const currentQuestion = computed(() => selectedTest.value?.questions[currentQuestionIndex.value]);
const isCurrentQuestionAnswered = computed(() => {
  return currentQuestion.value?.userResponse !== undefined;
});
const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === selectedTest.value.questions.length - 1;
});

function setResponse(questionIndex, responseIndex) {
  if(selectedTest.value) {
    testStore.setResponse(selectedTest.value.isoType, questionIndex, responseIndex);
  }
};
function nextQuestion() {
  if (currentQuestionIndex.value < selectedTest.value.questions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    finishTest();
  };
};
function isOptionSelected(optionIndex) {
  return currentQuestion.value?.userResponse === optionIndex;
};
function finishTest() {
  if (selectedTest.value){
    console.log('entramos aqui')
    const testResults = selectedTest.value.questions.map(question => ({
      clause: question.clause,
      questionText: question.questionText,
      answerOptions: question.answerOptions,
      correctAnswer: question.correctAnswer,
      userResponse: question.userResponse,
    }));
    console.log('test resul;ts', testResults)
    const testIsoType = selectedTest.value.isoType;
    testStore.setTestResults(testIsoType, testResults);
    router.push(`${route.params.test}/testFinished`)
  }
};

</script>

<template>
  <div class="container">
    <div 
      v-if="selectedTest" 
      class="container-test">
      <h2 class="container-test-title">{{ selectedTest.name }}</h2>
      <p class="container-test-description">{{ selectedTest.description }}</p>
      <FormIndication />
      <ProgressBar
        :currentQuestionIndex="currentQuestionIndex"
        :totalQuestions="selectedTest.questions.length"/>
      <div 
        v-if="currentQuestion" 
        class="container-test-question-container">
        <p class="container-test-question-container-question">
          {{ currentQuestion.questionText }}
        </p>
        <div class="container-test-question-container-response-options">
          <button
            v-for="(option, index) in currentQuestion.answerOptions"
            :key="index"
            @click="setResponse(currentQuestionIndex, index)"
            :class="{ 'selected': isOptionSelected(index) }"
            class="container-test-question-container-response-options-option-button" >
            {{ index + 1 }}
          </button>
        </div>
      </div>
      <button 
        v-if="currentQuestionIndex < selectedTest.questions.length" 
        @click="nextQuestion" 
        :disabled="!isCurrentQuestionAnswered"
        class="container-test-next-button">
        {{ isLastQuestion ? 'Finalizar' : 'Siguiente' }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  &-test {
    display: flex;
    flex-direction: column;
    gap: 24px;
    &-title {
      text-align: center;
    }
    &-description {
      font-size: 1rem; 
    }
    &-question-container {
      margin: 20px 0;
      &-question {
        margin-bottom: 20px;
        font-size: $body-font-size;
        color: $blue;
        font-weight: 500;
      }
      &-response-options {
        display: flex;
        justify-content: space-around;
        margin-bottom: 20px;
        &-option-button {
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          border: 1px solid $grey;
          transition: background-color 0.3s ease;
          &:hover,
          &.selected { 
            background-color: $light-blue;
          }
        }
      }
    }
    &-next-button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: $blue;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
      &:hover {
        background-color: darken($blue, 20%);
      }
      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
}
</style>