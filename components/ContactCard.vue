<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';
import { useRegistrationForm } from '~/composables/useForm';

const { 
  form, 
  rules, 
  inputKey, 
  formIsValid, 
  sendEmail 
} = useRegistrationForm();

async function sendEmailForm() {
 await sendEmail();
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-info">
      <h2 class="contact-title">
        ¿Nos ponemos en contacto?
      </h2>
      <p class="contact-description">
        ¡Nos encantaría estar en contacto contigo! Si deseas recibir actualizaciones, 
        noticias o información sobre nuestros servicios, por favor, proporciona tu nombre 
        y dirección de correo electrónico.
      </p>
    <form class="contact-form" id="form">
      <CrushTextField
        label="Nombre y Apellido"
        placeholder="Jhon Doe"
        :key="inputKey"
        :required="true"
        :validRules="rules.validateName"
        v-model="form.name"
      />
      <CrushTextField
        label="Correo electrónico"
        placeholder="email@ejemplo.com"
        :required="true"
        :key="inputKey"
        :valid-rules="rules.validateEmail"
        type="email"
        v-model="form.email"
      />
      <CrushButton
        variant="primary"
        text="Enviar"
        :disabled="!formIsValid"
        class="button"
        @click.prevent="sendEmailForm"
      />
    </form>
  </div>
  <figure class="figure">
    <img 
      src="~/assets/genericImage11.jpeg" 
      alt="imagen-de-asesorias" 
      class="figure__img">
  </figure>
  </div>
</template>


<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 40px;
  border-radius: 8px;
  margin: 160px auto 100px;
  max-width: $desktop-lower-breakpoint;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .contact-info {
    flex-basis: 45%;
  }

  .contact-form {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 0;
    :deep(.crush-text-field .crush-text-field-label-text) {
      padding: 10px;
      border-radius: 5px;
      color: $black;
      font-size: 16px;
      background-color: transparent;
    }
    :deep(.crush-text-field .input-container.active) {
      border-color: $grey;
    }
    :deep(.crush-text-field .input-container .crush-text-field-input) {
      color: $black;
      font-family: $font;
    }
    :deep(.crush-text-field), :deep(.crush-text-field-label-text){
      margin-bottom: 0;
    }

    .submit-button {
      padding: 10px 20px;
      background-color: $red; 
      color: $white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken($red, 10%);
      }
    }
    .button {
      background-color: $red;
      margin-top: 20px
    }
  }
}
.contact-description{
  max-width: 80ch;
  margin: 20px 0;
  font-size: 1rem;
}
.figure{
  flex-basis: 45%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.figure__img{
  border-radius: 8px;
}
</style>
