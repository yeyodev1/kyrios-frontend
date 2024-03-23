<script setup lang="ts">
const servicesArticles = [
  {
    title: 'Auditoria ISO',
    paragraph: 'Auditoria interna y externa de sistemas de gestión de calidad, ambiental, seguridad y salud en el trabajo, entre otros.'
  },
  {
    title: 'Capacitación',
    paragraph: 'Capacitación en sistemas de gestión de calidad, ambiental, seguridad y salud en el trabajo, entre otros.'
  },
  {
    title: 'Asesoría',
    paragraph: 'Asesoría en sistemas de gestión de calidad, ambiental, seguridad y salud en el trabajo, entre otros.'
  }
]
</script>

<template>
  <section class="services__section">
    <div class="services__section__content">
      <h2 class="services__section__content__title">
        Nuestros Servicios
      </h2>
      <p class="services__section__content__paragraph">
        Ofrecemos una variedad de servicios de capactación, asesoría en sistemas de gestión
        y mejora continua. Nos especializamos en Capacitación, Asesoría y Auditoria ISO.
      </p>
    </div>
    <div class="services__section__article__container">
      <KyriosServicesModel v-for="(article, index) in servicesArticles" :key="index" :title="article.title" :paragraph="article.paragraph"/>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services__section{
  width: 90vw;
  margin: 0 auto;
  padding: 36px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid $red;
  border-radius: 8px;
  @media (min-width: 768px){
    padding: 36px 0 80px;
  }
}
.services__section__content{
  text-align: center;
  font-family: $font;
  &__title{
    font-size: 2rem;
  }
  &__paragraph{
    font-size: 1.2rem;
    max-width: 80%;
    margin: 20px auto;
  }
}
.services__section__article__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
  @media (min-width: 768px){
    margin-top: 80px;
  }
}
</style>