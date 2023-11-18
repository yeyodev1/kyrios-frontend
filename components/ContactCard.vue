<script setup lang="ts">
import CrushTextField from '@nabux-crush/crush-text-field';
import CrushButton from '@nabux-crush/crush-button';


const form = reactive({
  name: '',
  email: '',
})

const rules = {
  validateName: [
    {
      validate: (value: string) => value.length >= 10,
      message: 'Por favor, coloca tu nombre completo'
    }
  ],
  validateEmail: [
    {
      validate: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: 'Por favor, ingresa un correo válido'
    }
  ]
}

const submitForm = () => {
  // Lógica de envío del formulario
  console.log('Nombre:', form.name);
  console.log('Email:', form.email);
  // Aquí enviarías los datos a tu backend o servicio correspondiente
}
</script>

<template>
  <div class="contact-container">
    <div class="contact-info">
      <h2>¿Nos ponemos en contacto?</h2>
      <p>¡Nos encantaría estar en contacto contigo! Si deseas recibir actualizaciones, noticias o información sobre nuestros servicios, por favor, proporciona tu nombre y dirección de correo electrónico.</p>
    </div>
    <form class="contact-form" @submit.prevent="submitForm">
      <CrushTextField
        label="Nombre y Apellido"
        placeholder="Juanito Piguave"
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
        class="submit-button"
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
