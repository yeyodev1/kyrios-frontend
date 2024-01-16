<script setup lang="ts">
function getYear(): number {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear;
}
</script>

<template>
  <div class="container">
    <p>
      <i class="fa-regular fa-copyright"></i>
      Copyright
    </p>
    <p>
      <a href="https://www.yeyo.dev/" target="_blank">YeyoDev <i class="fa-solid fa-heart" /> {{ getYear() }}</a> - Todos los derechos reservados
    </p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
  p {
    font-size: $body-font-size;
    text-align: center;
    color: $white;
    a {
      text-decoration: none;
      color: $white;
      i {
        color: #da87b1;
      }
    }
  }
}
</style>