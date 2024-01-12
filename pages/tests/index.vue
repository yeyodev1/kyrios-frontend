<script setup>
import useTestStore from '@/store/TestStore';
import { RouterLink } from 'vue-router';

const testStore = useTestStore();

const selectedTestIsoType = computed(() => {
  return testStore.selectedTest?.isoType || '';
});

async function selectTest(isoType) {
  testStore.selectTest(isoType);
}
function isSelected(isoType) {
  return testStore.selectedTest?.isoType === isoType;
}
</script>

<template>
  <div class="test-selection">
    <h1 class="test-selection-title">¿Qué prueba deseas realizar?</h1>
    <p class="test-selection-subtitle">Selecciona la prueba que corresponda.</p>
    <div class="test-selection-test-cards">
      <div
        v-for="test in testStore.tests"
        :key="test.id"
        :class="{ 'test-card-selected': isSelected(test.isoType) }"
        @click="selectTest(test.isoType)"
        class="test-card"
        >
        <h2>{{ test.isoType }}</h2>
      </div>
    </div>
    <RouterLink 
      v-if="selectedTestIsoType"
      :to="`tests/${selectedTestIsoType}`" 
      class="test-selection-next-button">
      Siguiente
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.test-selection {
  padding: 24px;
  margin: 84px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-title {
    text-align: center;
    margin-bottom: 16px;
    color: $blue;
  }
  &-subtitle {
    margin-bottom: 32px;
    font-size: $body-font-size;
    text-align: center;
  }
  &-test-cards {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 32px;
    .test-card {
      width: 100%;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      cursor: pointer;
      background-color: $green;
      padding: 24px;
      &-selected {
        background-color: darken($green, 20%);
      }
      &:hover:not(.test-card-selected) {
        background-color: darken($green, 10%);
      }
    }
  }
  &-next-button {
    padding: 8px 16px;
    border: none;
    background-color: $blue;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background-color: darken($blue, 10%);
    }
  }
}
</style>
