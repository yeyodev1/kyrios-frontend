<script setup>
import { useRoute } from 'vue-router';

import useBoletinesStore from '@/store/BoletinesStore'

const boletinesStore = useBoletinesStore();

const route = useRoute();


onMounted(async() => {
  
  console.log('parametros:', route.params)
  const id = route.params.boletin

  const boletine = await boletinesStore.getBoletineById(id);
  console.log('este es el boletin', boletine);
})


</script>

<template>
  <div class="container" v-if="boletinesStore.boletin">
    <div class="blog-post">
    <header class="blog-post-header">
      <h1>{{ boletinesStore.boletin.content.title }}</h1>
      <p class="blog-post-date">
        {{ boletinesStore.boletin.content.date}}
      </p>
    </header>
    <article class="blog-post-content">
      <p>
        {{ boletinesStore.boletin.content.content }}
      </p>
    </article>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  .blog-post {
    margin: 40px 0px;
    width: 80%;
    max-width: $desktop-lower-breakpoint;
    padding: 2em;
    background: $white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .blog-post-header h1 {
    margin-bottom: 0.5em;
    color: $blue;
    font-family: $font;
  }

  .blog-post-date {
    margin-bottom: 2em;
    color: $grey;
    font-size: 0.9em;
  }

  .blog-post-content p {
    line-height: 1.6;
    color: $black;
    font-size: 1em;
    margin-bottom: 1em;
  }

  @media (max-width: 768px) {
    .blog-post {
      padding: 1em;
    }

    .blog-post-header h1 {
      font-size: 1.5em;
    }
  }
}
</style>
