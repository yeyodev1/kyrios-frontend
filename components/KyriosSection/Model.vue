<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
})
</script>

<template>
  <article class="article">
    <div class="article__content">
      <h2 class="article__content__title">
        {{ title }}
      </h2>
      <p class="article__content__paragraph">
        {{ paragraph }}
      </p>
    </div>
    <img 
      v-if="image" 
      :src="image" 
      alt="article image" 
      class="article__image">
  </article>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  @media (min-width: 1024px){
    width: 30%;
  }
}
.article__content {
  text-align: center;
  color: $black;
}
.article__content__title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.article__content__paragraph {
  font-size: .9rem;
}
.article__image {
  width: 100%;
  object-fit: cover;
  margin-top: 20px;
  border-radius: 8px;
}
</style>