<script setup>
import empresarios from '@/assets/hero/empresarios.jpg';
import useBoletinesStore from '@/store/BoletinesStore';

const boletinesStore = useBoletinesStore();
const route = useRoute()

onMounted(async() => {
  await boletinesStore.getAllBoletines();
})
</script>

<template>
  <div class="container">
    <p class="container-title">
      Boletines
    </p>
    <p class="container-text">
      Mantente al tanto de la información sobre estándares, regulaciones 
      y mejores prácticas internacionales para alcanzar tus objetivos de 
      certificación y mejora de procesos
    </p>
    <div class="container-tickets">
      <BoletinCard
        v-for="(boletin, index) in boletinesStore.allBoletines"
        :key="index"
        :imageUrl="empresarios"
        :title="boletin.content.title"
        :date="boletin.content.date.split(' ')[0]"
        :link="`${route.path}/${boletin.id.toString()}`" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 100px 0;
  &-title {
    color: $red;
    font-size: 48px;
    text-align: center;
    font-weight: 700;
  }
  &-text {
    font-size: 1.3rem;
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    padding: 24px;
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