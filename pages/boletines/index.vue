<script setup>
import empresarios from '@/assets/hero/empresarios.jpg'

const boletines = [
  {
    imageUrl: empresarios,
    title: 'Nombre o título del boletín',
    date: 'Noviembre 01, 2023',
    link: '/boletines/boletin-1' 
  },
  {
    imageUrl: empresarios,
    title: 'Nombre o título del boletín',
    date: 'Noviembre 01, 2023',
    link: '/boletines/boletin-1' 
  },
  {
    imageUrl: empresarios,
    title: 'Nombre o título del boletín',
    date: 'Noviembre 01, 2023',
    link: '/boletines/boletin-1' 
  },
  {
    imageUrl: empresarios,
    title: 'Nombre o título del boletín',
    date: 'Noviembre 01, 2023',
    link: '/boletines/boletin-1' 
  },
  {
    imageUrl: empresarios,
    title: 'Nombre o título del boletín',
    date: 'Noviembre 01, 2023',
    link: '/boletines/boletin-1' 
  },
];

</script>

<template>
  <div class="container">
    <p class="container-title">Boletines</p>
    <p class="container-text">
      Mantente al tanto de la información sobre estándares, regulaciones y mejores prácticas internacionales para alcanzar tus objetivos de certificación y mejora de procesos
    </p>
    <div class="container-tickets">
      <BoletinCard
        v-for="(boletin, index) in boletines"
        :key="index"
        :imageUrl="boletin.imageUrl"
        :title="boletin.title"
        :date="boletin.date"
        :link="boletin.link" />
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