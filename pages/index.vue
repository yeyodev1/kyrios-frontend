<script setup lang="ts">
useHead({
  title: 'KYRIOS',
  meta: [
    {
      name: 'description',
      content: 'Somos una empresa de consultoría y capacitación en sistemas de gestión de calidad, ambiental, seguridad y salud ocupacional, seguridad alimentaria, continuidad de negocios, seguridad de la información, antisoborno, entre otros.'
    },
    {
      name: 'keywords',
      content: 'consultoría, capacitación, sistemas de gestión, calidad'
    }
  ],
});
</script>
<template>
  <div class="container">
    <MainContent />
    <KyriosNumber/>
    <KyriosServices />
    <CarouselOfImages />
    <ContactCard id="contact" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  align-items: center;
}
</style>