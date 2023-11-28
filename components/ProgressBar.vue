<script setup>
const props = defineProps({
  currentQuestionIndex: {
    type: Number,
    requiered: true,
  },
  totalQuestions: {
    type: Number,
    requiered: true,
  }
})

const progressPercentage = computed(() => {
  return (props.currentQuestionIndex / props.totalQuestions) * 100;
})
</script>

<template>
  <div class="container">
    <div class="container-progress-bar" :style="{ width: progressPercentage + '%' }" />
    <div class="container-progress-percentage">{{ progressPercentage.toFixed(0) }}%</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  gap: 16px;
  &-progress-bar {
    border-radius: 8px;
    height: 20px;
    background-color: $blue;
    width: 0; 
    transition: width 0.3s ease;
  }
  &-progress-percentage {
    width: 8%;
    color: $blue;
    font-weight: bold;
  }
}
</style>
