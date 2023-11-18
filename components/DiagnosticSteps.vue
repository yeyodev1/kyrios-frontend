<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => [],
  },
  buttonText: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="diagnostic-container">
    <h2 class="diagnostic-title">Obtén tu diagnóstico en 3 pasos:</h2>
    <div class="steps-container">
      <div
        class="step-box"
        v-for="(step, index) in steps"
        :key="index"
      >
        <div class="step-number">{{ step.number }}</div>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-description">{{ step.description }}</p>
      </div>
    </div>
    <button class="diagnostic-button">{{ buttonText }}</button>
  </div>
</template>


<style lang="scss" scoped>
.diagnostic-container {
  text-align: center;
  align-items: center;
  padding: 24px;

  .diagnostic-title {
    margin: 20px 0;
    font-size: $h2-font-size;
    font-weight: bold;
  }

  .steps-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    width: 100%;

    .step-box {
      background-color: $green; 
      border-radius: 8px;
      padding: 15px;
      width: 250px; 

      .step-number {
        background-color: $green;
        color: $blue;
        font-weight: 700;
        padding: 5px 10px;
        border-radius: 8px;
        margin-bottom: 10px;
      }

      .step-title {
        font-size: $h3-font-size;
        font-weight: bold;
        color: $black;
      }

      .step-description {
        font-size: $body-font-size;
      }
    }
  }

  .diagnostic-button {
    background-color: $blue; 
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken($blue, 10%);
    }
  }
}

@media (max-width: $tablet-upper-breakpoint) {
  .steps-container {
    flex-direction: column;
    .step-box {
      width: auto; 
    }
  }
}
</style>
