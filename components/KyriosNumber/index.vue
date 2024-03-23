<script setup lang="ts">
import kyriosNumbers from '~/utils/KyriosNumbers';
</script>

<template>
  <section class="numbers">
    <h2 class="numbers__title">
      Kyrios en números
    </h2>
    <p class="numbers__paragraph">
      El numero de clientes asesorados, 
      certificados, auditados y 
      capacitados exceden los 800 a nivel 
      de Suramérica, Centro América y 
      Norteamérica. Nuestros clientes asi 
      mismo se pueden dividir en una 
      variedad de razones sociales, desde 
      entidades financieras o industriales 
      hasta entidades estatales. A continuación
      unos de los varios sectores que hemos asesorado.
    </p>
    <div class="numbers__container">
      <KyriosNumberModel 
        v-for="(industry, index) in kyriosNumbers" 
        :key="index" 
        :icon="industry.icon"
        :number="industry.number" 
        :title="industry.title"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.numbers {
  font-family: $font;
  padding: 20px;
  margin: 80px 0;
  @media (min-width: 1024px){
    width: 90vw;
    padding: 0 20px;
    margin: 80px auto 120px;
  }
}

.numbers__title {
  font-size: 2rem;
  text-align: center;
}

.numbers__container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px 20px;
}
.numbers__paragraph{
  font-size: 1.15rem;
  max-width: 90%;
  margin: 40px auto 64px;
}
</style>