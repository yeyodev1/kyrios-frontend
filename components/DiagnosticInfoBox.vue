
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  buttonText: String,
  link: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="info-box">
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <RouterLink :to="link" class="diagnostic-button">{{ buttonText }}</RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-box {
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  overflow: hidden;

  .content {
    max-width: 960px;
    margin: 0 auto;
    text-align: center;

    .title {
      margin-bottom: 20px;
      font-size: 1.5em;
    }

    .description {
      margin-bottom: 20px;
    }

    .diagnostic-button {
      padding: 10px 20px;
      background-color: $blue;
      border: none;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
      text-decoration: none;

      &:hover {
        background-color: darken($blue, 10%);
      }
    }
  }
}

@media (max-width: 768px) {
  .info-box {
    .content {
      .title {
        font-size: 1.2em;
      }
    }
  }
}
</style>
