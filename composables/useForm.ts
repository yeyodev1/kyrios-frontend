import { ref, reactive, computed } from 'vue';
import emailjs from '@emailjs/browser';

import { validateName, validateEmail } from '~/utils/ContactForm.regex';


export function useRegistrationForm() {
  const config = useRuntimeConfig();
  const inputKey = ref(0);
  const form = reactive({
    name: '',
    email: '',
  });

  const rules = {
    validateName: [
      {
        validate: (value: string) => validateName(value),
        message: 'Por favor, coloca tu nombre completo',
      },
    ],
    validateEmail: [
      {
        validate: (value: string) => validateEmail(value),
        message: 'Por favor, coloca un email válido',
      },
    ],
  };

  const formIsValid = computed(() => {
    return (
      form.name !== '' &&
      form.email !== '' &&
      rules.validateName.every((rule) => rule.validate(form.name)) &&
      rules.validateEmail.every((rule) => rule.validate(form.email))
    );
  });

  function resetInputs() {
    form.name = '';
    form.email = '';
    inputKey.value++;
  }

  async function sendEmail() {
    const mail = {
      from_name: form.name,
      email: form.email,
    };
    if (formIsValid.value) {
      try {
        console.log('SENDING_EMAIL', mail, inputKey.value, config.public.serviceId, config.public.templateId, config.public.publicKey);
        await emailjs.send(config.public.serviceId, config.public.templateId, mail, config.public.publicKey);
        resetInputs();
      } catch (error) {
        console.error('CANNOT_SEND_EMAIL', error);
      }
    }
  }

  return {
    form,
    rules,
    inputKey,
    formIsValid,
    sendEmail,
  };
}
