<script setup lang="ts">
import { fase1, fase2, fase3, fase4, garantia } from '../utils/ContentMethodology';
</script>

<template>
  <div class="mth__container">
    <h1 class="mth__container__title">
      Metodología de trabajo
    </h1>
    <p class="mth__container__paragraph mth__container__paragraph--bold">
      IMPLEMENTACIÓN DE REQUISITOS (LEGALES, REGLAMENTARIOS, NORMATIVOS O
      INTERNOS)
    </p>
    <p class="mth__container__paragraph">
      El proceso de implementación de requisitos tiene tres fases detalladas a continuación:
    </p>
  </div>
  <KyriosMethodology :index="1" :title="fase1.title" :items="fase1.items" />
  <KyriosMethodology :index="2" :title="fase2.title" :items="fase2.items" />
  <KyriosMethodology :index="3" :title="fase3.title" :items="fase3.items" />
  <KyriosMethodology :index="4" :title="fase4.title" :items="fase4.items" />
  <KyriosMethodology :index="5" :show-fase="false" :title="garantia.title" :items="garantia.items" />
</template>

<style lang="scss" scoped>
.mth__container {
  padding: 40px 20px;
  font-family: $font;
  text-align: center;
  @media (min-width: 1024px) {
    width: 80vw;
    min-height: 60vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__title {
    font-size: 3rem;
    color: $red;
    font-weight: 700;
    margin-bottom: 40px;
    @media (min-width: 1024px) {
      font-size: 6rem;
    }
  }

  &__paragraph {
    font-size: 1rem;
    margin-bottom: 20px;
    @media (min-width: 1024px) {
      font-size: 1.2rem;
    }

    &--bold {
      font-weight: 700;
    }
  }
}
</style>