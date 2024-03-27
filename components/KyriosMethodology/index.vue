<script setup lang="ts">
const props = defineProps({
  index: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  showFase: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <section class="mth__section">
    <div
      :class="index % 2 === 0 ? 'red' : 'blue'" 
      class="mth__list">
      <ul class="list__ul">
        <li 
          v-for="(item, index) in items" 
          :key="index" 
          class="list__ul__li">
            {{ item }}
        </li>
      </ul>
    </div>
    <div 
      :class="index % 2 === 0 ? 'blue' : 'red'"
      class="mth__content">
      <p 
        v-if="showFase" 
        class="mth__content__title">
          Fase {{ index }}
      </p>
      <h2 class="mth__content__title">
        {{ title }}
      </h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.mth__section {
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  padding: 0 20px;
  @media (min-width: 1024px) {
    padding: 0 10px 0 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    height: 280px;
    position: relative;
  }
}
.mth__list {
  margin-bottom: 20px;
  @media (min-width: 1024px) {
    flex: 2 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    color: $white;
    padding: 0 20px;
  }
}
.list__ul {
  padding-left: 30px;
}
.list__ul__li {
  font-size: 1rem;
  margin-bottom: 10px;
  max-width: 70ch;
}
.mth__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex: 1 0;
    height: 100%;
    border-radius: 10px 0 0 10px;
    position: relative;
    right: 10px;
    z-index: 20;
  }
}

.mth__content__title {
  font-size: 2rem;
  color: $red;
  font-weight: 700;
  @media (min-width: 1024px){
    color: $white;
  }
}
.red {
 @media (min-width: 1024px){
  background-color: $red;
 }
}
.blue {
 @media (min-width: 1024px){
  background-color: $blue;
 }
}
</style>