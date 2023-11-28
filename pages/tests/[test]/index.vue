<script setup>
import { computed, ref } from 'vue';

import useTestStore from '@/store/TestStore';
import { useRoute } from 'vue-router';

const route = useRoute();

const testStore = useTestStore();

const testId = route.params.test; 

const currentQuestionIndex = ref(0);
const selectedTest = computed(() => testStore.tests.find(test => test.id === testId));
const responseOptions = computed(() => testStore.responseOptions);
const currentQuestion = computed(() => {
  return selectedTest.value?.satisfactionQuestions[currentQuestionIndex.value];
});
const isCurrentQuestionAnswered = computed(() => {
  return currentQuestion.value?.response !== null;
});
const isLastQuestion = computed(() => {
  return currentQuestionIndex.value === selectedTest.value.satisfactionQuestions.length - 1;
});

function setResponse(testId, questionIndex, value) {
  testStore.setResponse(testId, questionIndex, value);
}

function nextQuestion() {
  if (currentQuestionIndex.value < selectedTest.value.satisfactionQuestions.length - 1) {
    currentQuestionIndex.value++;
  } else {
    console.log('holi')
  }
}
function isOptionSelected(value) {
  return currentQuestion.value?.response?.value === value;
}
</script>

<template>
  <div class="container">
    <div 
      v-if="selectedTest" 
      class="container-test">
      <h2 class="container-test-title">{{ selectedTest.name }}</h2>
      <p class="container-test-description">{{ selectedTest.description }}</p>

      <div 
        v-if="currentQuestion" 
        class="container-test-question-container">
        <p class="container-test-question-container-question">
          {{ currentQuestion.question }}
        </p>
        <div class="container-test-question-container-response-options">
          <button
            v-for="option in responseOptions"
            :key="option.value"
            @click="setResponse(selectedTest.id, currentQuestionIndex, option.value)"
            :class="{ 'selected': isOptionSelected(option.value) }"
            class="container-test-question-container-response-options-option-button" >
            {{ option.value }}
          </button>
        </div>
      </div>

      <button 
        v-if="currentQuestionIndex < selectedTest.satisfactionQuestions.length" 
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