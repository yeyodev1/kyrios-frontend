<template>
  <div class="app-container">
    <NuxtLayout>
      <div class="app-container-view">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: $white;
  overflow-x: hidden;
  &-view{
    flex: 1;
  }
}
</style>
