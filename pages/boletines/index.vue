<script setup>
import empresarios from '@/assets/hero/empresarios.jpg';
import useBoletinesStore from '@/store/BoletinesStore';

const boletinesStore = useBoletinesStore();
const route = useRoute()

onMounted(async() => {
  console.log('todos los boletines')
  await boletinesStore.getAllBoletines();
  console.log(boletinesStore.allBoletines)
})

</script>

<template>
  <div class="container">
    <p class="container-title">Boletines</p>
    <p class="container-text">
      Mantente al tanto de la información sobre estándares, regulaciones y mejores prácticas internacionales para alcanzar tus objetivos de certificación y mejora de procesos
    </p>
    <div class="container-tickets">
      <BoletinCard
        v-for="(boletin, index) in boletinesStore.allBoletines"
        :key="index"
        :imageUrl="empresarios"
        :title="boletin.content.title"
        :date="boletin.content.date"
        :link="`${route.path}/${boletin.id.toString()}`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 40px 0;
  padding: 24px;
  &-title {
    color: $black;
    font-size: $h2-font-size;
    text-align: center;
    font-weight: 700;
  }
  &-text {
    font-size: $body-font-size;
    text-align: center;
    padding: 24px;
    @media (min-width: $tablet-upper-breakpoint) {
      font-size: $h2-font-size;
    }
  }
  &-tickets {
    display: flex;
    margin-top: 40px;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }
}
</style>