<script setup> 

const props = defineProps({
  imageUrl: {
    type: String, 
    required: false
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="card">
    <img 
      :src="imageUrl"
      alt="imagen de perfil"
      class="card-image">
    <h3 class="card-name">Nombre: <span class="card-name-span">{{ name }}</span></h3>
    <p class="card-rol">Rol: <span class="card-rol-span">{{ role }}</span></p>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    &-image {
      border-radius: 50%;
      width: 100px;
      height: 100px;
      object-fit: contain;
    }
    &-rol {
      font-weight: bold;
      font-size: 1rem;
      &-span {
        font-weight: 400;
      }
    }
    &-name {
      font-size: 1rem;
      &-span {
        font-weight: bold;
      }
    }
  }
</style>
