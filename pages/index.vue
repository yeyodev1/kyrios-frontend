<script setup lang="ts">
import CallToAction from '../components/CallToAction.vue';
import auditoria from '../assets/auditoria.jpeg'
import implementacion from '../assets/implementacion.jpeg'
import capacitacion from '../assets/capacitacion.jpeg'

const diagnosticSteps = [
  {
    number: '1',
    title: 'Seleccionar',
    description: 'Selecciona la prueba ISO que corresponda.'
  },
  {
    number: '2',
    title: 'Completar',
    description: 'Realiza el test completando las preguntas.'
  },
  {
    number: '3',
    title: 'Diagnosticar',
    description: 'Realiza el test completando las preguntas.'
  },
  {
    number: '3',
    title: 'Diagnosticar',
    description: 'Realiza el test completando las preguntas.'
  }
];
</script>
<template>
  <div class="container">
    <TheHero />
    <CallToAction
      title="Evaluación y  Desarrollo de Proveedores y Auditorías"
      subtitle=" (Audiconfian S.A.)"
      content="Fomentamos la implementación de una gestión óptima de la cadena de suministros y el aumento del nivel de desempeño de los proveedores, lo que genera valor agregado para su organización a través del desarrollo mutuo tanto de los proveedores como de los gestores del proceso de adquisiciones."
      :imageUrl=auditoria
      buttonText="Agendar auditoría" 
      link="contact" />
    <DiagnosticInfoBox
      title="¿Por qué debo realizar un diagnóstico ISO?"
      description="Mejora la calidad de tus productos y servicios, aumenta la eficiencia operativa, impulsa la satisfacción del cliente, eleva la competitividad en el mercado y disminuye los riesgos. Además, contribuye a fortalecer la cultura organizacional, te prepara para auditorías externas, genera confianza entre inversionistas y socios comerciales, y libera recursos para fomentar la innovación."
      buttonText="Empezar diagnóstico"
      link="tests" />
    <CallToAction
      title="Asesoría en la Implementación de Sistemas de Gestión y Evaluación Tecnológica"
      subtitle=""
      content="Ofrecemos asesoramiento y acompañamiento para la implementación de sistemas de gestión de Calidad, Ambiental, Seguridad y Salud Ocupacional, Seguridad Alimentaria, Continuidad de Negocios, Seguridad de la Información, Antisoborno, entre otros. Además, realizamos evaluaciones de tecnología y aplicaciones."
      :imageUrl=implementacion
      buttonText="Agendar consultoría" 
      link="tests" 
      :inverted="true"/>
    <DiagnosticSteps
      :steps="diagnosticSteps"
      buttonText="Empezar diagnóstico"/>
    <CallToAction
      title="Capacitación"
      subtitle=""
      content="Formamos a las personas en cualquier tema. Somos conscientes de que la organización requiere colaboradores competentes para desempeñar las responsabilidades diarias y cumplir con sus funciones de manera integral, con el fin de respaldar la consecución de los objetivos de la organización. De esta manera, logramos la mejora continua."
      :imageUrl= capacitacion
      buttonText="Agendar capacitación" 
      link="contact" />
    <ContactCard />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
}
</style>