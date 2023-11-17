<script setup lang="ts">
import TheHeader from '@/layouts/web/TheHeader.vue';

</script>


<template>
  <div class="app-container">
    <TheHeader />
    <div class="app-container-view">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  &-view {
    flex: 1;
  }
}
</style>