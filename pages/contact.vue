<script setup lang="ts">
import { reactive } from 'vue';
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';

const form = reactive({
  name: '',
  email: '',
});

// Reglas de validación para los campos del formulario
const rules = {
  validateName: [
    {
      validate: (value: string) => value.length >= 10,
      message: 'Por favor, coloca tu nombre completo',
    },
  ],
  validateEmail: [
    {
      validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Por favor, ingresa un correo válido',
    },
  ],
};

// Función para manejar la presentación del formulario
const submitForm = () => {
  // Aquí implementarías la lógica para validar y enviar el formulario
  console.log('Nombre:', form.name);
  console.log('Email:', form.email);
  // Asumiendo que tienes un backend para enviar los datos
  // podrías usar axios o fetch para hacer una solicitud POST, por ejemplo.
};
</script>

<template>
  <div class="contact-container">
    <div class="contact-info">
      <h2 class="contact-title">¿Nos ponemos en contacto?</h2>
      <p class="contact-description">¡Nos encantaría estar en contacto contigo! Si deseas recibir actualizaciones, noticias o información sobre nuestros servicios, por favor, proporciona tu nombre y dirección de correo electrónico.</p>
    </div>
    <form class="contact-form" @submit.prevent="submitForm">
      <CrushTextField
        label="Nombre y Apellido"
        placeholder="¿Con quién tenemos el gusto?"
        :valid-rules="rules.validateName"
        v-model="form.name"
      />
      <CrushTextField
        label="Correo electrónico"
        placeholder="email@ejemplo.com"
        :valid-rules="rules.validateEmail"
        type="email"
        v-model="form.email"
      />
      <CrushButton
        variant="primary"
        text="Enviar"
        type="submit"
        class="button"
      />
    </form>
  </div>
</template>


<style lang="scss" scoped>
.contact-container {
  margin: 80px 0;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  .contact-info {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .contact-title {
    color: $blue; 
    margin-bottom: 8px;
  }

  .contact-description {
    color: $blue; 
    margin-bottom: 16px;
    font-size: $body-font-size;
    color: $black;
    width: 80%;
  }

  .contact-form {
    width: 100%;
    max-width: $desktop-upper-breakpoint;
    margin: 0 auto;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 36px;
    background-color: $green;
    flex-wrap: wrap;
    :deep(.crush-text-field) {
      margin-bottom: 8px;
    }

    :deep(.crush-button) {
      margin-top: 8px;
    }
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
    .button {
      background-color: $blue;
      color: $white;
      border: none;
      width: 30%;
    }
  }
}
</style>
