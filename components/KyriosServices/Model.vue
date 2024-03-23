<script setup lang="ts">
const props = defineProps({
img:{
  type: String,
  required: false
},
title:{
  type: String,
  required: true
},
paragraph:{
  type: String,
  required: true
}
})
</script>

<template>
  <div class="services__article">
    <img v-if="img" :src="img" alt="img-generica">
    <div class="services__article__content">
      <h3 class="services__article__content__title">
        {{ title }}
      </h3>
      <p class="services__article__content__paragraph">
        {{ paragraph }}
      </p>
    </div>
    <GlobalButton 
      to="/services" 
      content="Obtener más información" 
    />
  </div>
</template>

<style lang="scss" scoped>
.services__article{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media (min-width: 768px){
    width: 32%;
    margin-bottom: 0;
  }
}
.services__article__content{
  text-align: center;
  font-family: $font;
  &__title{
    font-size: 1.4rem;
  }
  &__paragraph{
    font-size: 1rem;
    max-width: 80%;
    margin: 20px auto;
  }
}
</style>