<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    required: true
  },
content:{
  type: String,
  required: true
}
})
</script>

<template>
  <div class="content__button">
    <NuxtLink :to="to" class="content__button-link">
      {{ content }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.content__button{
  padding: 20px 0;
}
.content__button-link {
  padding: 10px 20px;
  background-color: $red;
  color: $white;
  border-radius: 8px;
  font-size: .8rem;
  font-weight: 700;
  text-decoration: none;
  transition: .3s;
  @media (min-width: 1024px){
    font-size: 1rem;
  }
  &:hover {
    background-color: $red;
  }
}
</style>