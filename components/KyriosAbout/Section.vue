<script setup lang="ts">
import iso1 from '@/assets/dataCompany/KYRIOS CERTIFICADO ISO 9001 ER-0357-2022.pdf'
import iso2 from '@/assets/dataCompany/KYRIOS CERTIFICADO IQNetES-0357-2022_2023-10-05.pdf'
</script>

<template>
  <section class="section">
    <div class="section__content">
      <h2 class="content__title">
        Politica de la Calidad
      </h2>
      <p class="content__paragraph">
        Brindar Servicios de Consultoría y Capacitación en
        sistemas de gestión y mejora continua. Buscando
        la excelencia en todo lo que hacemos con el
        cumpliendo requisitos aplicables y mejorando
        continuamente el servicio y los procesos.
      </p>
    </div>
    <div class="section__file">
      <div class="section__file__content">
        <h2 class="section__file__title">
          Nuestras Certificaciones ISO
        </h2>
      </div>
      <div class="section__file__buttons">
        <a class="section__file__button" :href="iso1" download>
          Descargar
        </a>
        <a class="section__file__button" :href="iso2" download>
          Descargar
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  height: 90vh;
  padding: 60px 70px;
  font-family: $font;
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 60px 30px;
    height: auto;
    min-height: 90vh;
    overflow: hidden;
  }
  &__content {
    display: flex;
    height: 80%;
    padding: 0 40px;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    flex: 1.2 0;
    @media (max-width: 1023px){
      padding: 0;
      width: 80vw;
    }
  }
  &__file {
    padding: 40px;
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-around;
    background-color: $red;
    border-radius: 8px 0 0 8px;
    flex: 1 0;
    &__buttons{
      display: flex;
      justify-content: center;
      @media (max-width: 1023px) {
        flex-direction: column;
        gap: 20px;
      }
    }
    &__title {
      font-size: 4rem;
      color: $white;
      @media (max-width: 1023px) {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
      }
    }
    &__button {
      background-color: $white;
      font-size: 1.5rem;
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      color: $black;
      border: none;
      padding: 16px;
      margin: 0 20px;
      cursor: pointer;
      @media (max-width: 1023px){
        font-size: 1rem;
        width: 80%;
        margin: auto;
      }
    }
  }
}
.content {
  &__title {
    font-size: 3rem;
  }
  &__paragraph {
    font-size: 1.4rem;
    color: $black;
    max-width: 80%;
    @media (max-width: 1023px) {
      max-width: 100%;
    }
  }
}
</style>