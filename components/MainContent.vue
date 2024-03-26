<template>
  <main class="team__container">
    <div class="team__container-desktop">
      <div class="team__container__name">
        <p class="team__container__name__paragraph">
          KYRIOS CONSULTORES
        </p>
      </div>
      <div class="team__container__content">
        <h1 class="content__title">
          SERVICIOS DE CAPACITACIÓN,
          <strong class="content__title content__title-strong">ASESORÍA</strong>
          EN SISTEMAS DE GESTIÓN Y MEJORA CONTINUA
        </h1>
        <div class="content__description">
          <p class="content__description__paragraph">
            Promovemos el uso de herramientas para optimizar el
            desempeño empresarial. Nos especializamos en Capacitación, Asesoría y Auditoria ISO.
            Consulta previa para la soluciones en Responsabilidad Social, Analisis y mejora de
            procesos, entre otros.
          </p>
          <GlobalButton
            to="/userLogin"
            content="Empezar diagnostico"
          />
        </div>
      </div>
    </div>
    <figure class="team__container__figure">
        <img 
          src="~/assets/hero/empresarios.jpg" 
          alt="Imagen referencia"
          class="team__container__figure__image"/>
    </figure>
  </main>
</template>

<style lang="scss" scoped>
.team__container {
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (min-width: 768px) and (max-width: 1024px){
    min-height: 80dvh;
    max-width: 90vw;
    margin: 0 auto;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    min-height: 90dvh;
    max-width: 90vw;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
  }
  &-desktop {
    @media (min-width: 1024px) {
      width: 50%;
    }
  }
  &__content{
    font-family: $font;
  }
}
.team__container__name__paragraph {
  color: $red;
  font-size: .65rem;
  font-family: $font;
  font-weight: 700;
  margin-bottom: 24px;
  @media (min-width: 1024px){
    margin-bottom: 8px;
    padding-left: 12px;
  }
}
.content__title {
  color: $black;
  font-size: 1.5rem;
  margin-bottom: 16px;
  @media (min-width: 768px) and (max-width: 1024px){
    font-size: 2rem;
  }
  @media (min-width: 1024px){
    font-size: 3rem;
  }
  &-strong {
    color: $red;
    max-width: 100%
  }
}
.content__description__paragraph {
  color: $black;
  font-size: .9rem;
  margin-bottom: 24px;
  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
}
.team__container__figure{
  width: 50%;
  display: flex;
  justify-content: right;
  @media (max-width: 1023px){
    display: none;
  }
  &__image {
    width: 80%;
    height: auto;
    border-radius: 8px;
  }
}
</style>