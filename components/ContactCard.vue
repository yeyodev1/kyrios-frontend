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
    </div>
    <form class="contact-form" id="form">
      <CrushTextField
        label="Nombre y Apellido"
        placeholder="¿Con quién tenemos el gusto?"
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
</template>


<style lang="scss" scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: $green;
  border-radius: 8px;
  margin: 24px;
  max-width: $desktop-lower-breakpoint;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  .contact-info {
    flex-basis: 50%;
  }

  .contact-form {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
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

    .submit-button {
      padding: 10px 20px;
      background-color: $blue; 
      color: $white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: darken($blue, 10%);
      }
    }
  }
}
</style>
