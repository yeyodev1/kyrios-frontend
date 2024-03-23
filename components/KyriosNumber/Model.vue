<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  number: {
    type: Number || String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="numbers__item">
    <div>
      <i 
        :class="icon" 
        class="numbers__icon"></i>
    </div>
    <div class="numbers__content">
        <h3 class="numbers__content-number">
          {{ number }}
        </h3>
        <p class="numbers__content-title">
          {{ title }}
        </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.numbers__icon {
  font-size: 3.5rem;
  color: $red;
}
.numbers__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 45%;
  margin: 0 auto;
  @media (min-width: 1024px){
    width: 14%;
  }
}
.numbers__content-number {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5px;
}
.numbers__content-title {
  font-size: .9rem;
  font-weight: 700;
}
.numbers__content{
  color: $black;
  text-align: center
}
</style>