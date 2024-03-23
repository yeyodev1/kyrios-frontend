<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  imageUrl: String,
  frameNumber: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  date: String,
  link: {
    type: String,
    required: true
  }
});
</script>


<template>
  <div class="card-container">
    <div class="card-image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div
        v-if="frameNumber?.length" 
        class="frame-number">{{ frameNumber }}</div>
    </div>
    <div class="card-details">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-date">{{ date }}</p>
      <GlobalButton
        :to="link"
        content="Ver detalle" />    
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card-container {
  border-radius: 15px;
  overflow: hidden;
  width: 300px;
}

.card-image {
  background-size: cover;
  background-position: center;
  position: relative;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px;

  .frame-number {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 5px 10px;
    border-radius: 10px;
    margin: 0;
  }
}

.card-details {
  padding: 20px;
  text-align: center;

  .card-title {
    margin: 0;
    color: $black;
    font-size: 18px;
  }

  .card-date {
    color: $black;
    font-size: 16px;
  }
}
</style>
