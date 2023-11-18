<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  content: String,
  imageUrl: String,
  buttonText: String,
  link: {
    type: String,
    required: true
  }
})
</script>


<template>
  <div class="component-container">
    <div class="text-content">
      <h2 class="title">{{ title }}</h2>
      <p class="subtitle">{{ subtitle }}</p>
      <p class="content">{{ content }}</p>
      <RouterLink :to="link" class="action-button">  
        {{ buttonText }}
      </RouterLink>
    </div>
    <div class="image-content">
      <img :src="imageUrl" alt="Descriptive Alt Text" class="responsive-image"/>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.component-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .text-content {
    padding: 20px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .title {
      color: #333;
      font-size: 24px;
      font-weight: bold;
    }

    .subtitle {
      color: #666;
      font-size: 18px;
      margin: 10px 0;
    }

    .content {
      color: #333;
      margin: 10px 0;
    }

    .action-button {
      padding: 10px 20px;
      background-color: $blue;
      color: $white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
      transition: background-color 0.3s;
      text-decoration: none;

      &:hover {
        background-color: darken($blue, 10%);
      }
    }
  }

  .image-content {
    .responsive-image {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 12px;
    }
  }
}
</style>
