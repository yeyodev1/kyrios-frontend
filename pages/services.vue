<script setup lang="ts">
import { services } from '~/utils/Services';
</script>

<template>
  <h3 class="title">
    Nuestros servicios
  </h3>
  <div class="container">
    <CallToAction
      v-for="(service, index) in services"
      :key="index"
      :title="service.title"
      :content="service.content"
      :imageUrl="service.imageUrl"
      :idTitle="service.idTitle"
      :inverted="service.inverted" />  
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding: 40px;
  text-align: center;
  font-size: 2rem;
  color: $red;
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
}
.container {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
}
</style>