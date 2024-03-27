<script setup lang="ts">
</script>

<template>
  <main class="main">
    <h1 class="main__title">
      Acerca de Nosotros <span class="main__title--red"><br>Kyrios Consultores</span>
    </h1>
    <div class="main__content">
      <div class="content__mision">
        <h2 class="content__title">
          Misión
        </h2>
        <p class="content__paragraph">
          Promover la búsqueda de la excelencia empresarial y al
          desarrollo de la sociedad.
        </p>
      </div>
      <div class="content__vision">
        <h2 class="content__title">
          Visión
        </h2>
        <p class="content__paragraph">
          Ofrecer servicios de consultoría, capacitación en sistemas de
          gestión y mejora continua para lograr la excelencia
          empresarial. Aplicando herramientas que permitan optimizar
          los recursos de la organización. Colaborando con el
          desarrollo del capital natural, social y humano.
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  min-height: 80vh;
  padding: 60px 70px;
  font-family: $font;
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 60px 20px;
  }
  &__title {
    font-size: 6rem;
    margin-bottom: 40px;
    color: $black;
    @media (max-width: 1200px) {
      font-size: 3rem;
    }
    &--red {
      color: $red;
      font-size: 6rem;
      @media (max-width: 1200px) {
      font-size: 3rem;
    }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: auto;
    max-width: 40%;
    @media (max-width: 1200px) {
      width: 80vw;
      max-width: none;
    }
  }
}
.content__title {
  font-size: 3rem;
  margin-bottom: 16px;
  color: $black;
}
.content__paragraph{
  font-size: 1.5rem;
  color: $black;
}
</style>