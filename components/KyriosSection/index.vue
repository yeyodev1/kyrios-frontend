<script setup lang="ts">
import auditoria from '~/assets/auditoria.jpeg'
import implementacion from '~/assets/implementacion.jpeg'
import capacitacion from '~/assets/capacitacion.jpeg'

const callToActionContent = reactive({
  callsToAction: [
    {
      title: "Asesoría en la Implementación de Sistemas de Gestión y Evaluación Tecnológica",
      content: "Ofrecemos asesoramiento y acompañamiento para la implementación de sistemas de gestión de Calidad, Ambiental, Seguridad y Salud Ocupacional, Seguridad Alimentaria, Continuidad de Negocios, Seguridad de la Información, Antisoborno, entre otros. Además, realizamos evaluaciones de tecnología y aplicaciones.",
      buttonText: "Agendar consultoría",
      link: "tests",
    },
    {
      title: "Capacitación",
      content: "Formamos a las personas en cualquier tema. Somos conscientes de que la organización requiere colaboradores competentes para desempeñar las responsabilidades diarias y cumplir con sus funciones de manera integral, con el fin de respaldar la consecución de los objetivos de la organización. De esta manera, logramos la mejora continua.",
      buttonText: "Agendar capacitación",
      link: "contact",
    },
    {
      title: "Evaluación y  Desarrollo de Proveedores y Auditorías",
      subtitle: " (Audiconfian S.A.)",
      content: "Fomentamos la implementación de una gestión óptima de la cadena de suministros y el aumento del nivel de desempeño de los proveedores, lo que genera valor agregado para su organización a través del desarrollo mutuo tanto de los proveedores como de los gestores del proceso de adquisiciones.",
      buttonText: "Agendar auditoría",
      link: "contact",
    }
  ],
});


const images = [
  {
    url: implementacion
  },
  {
    url: capacitacion
  },
  {
    url: auditoria
  
  }
];

</script>

<template>
  <section class="section">
    <KyriosSectionModel
      v-for="(callToAction, index) in callToActionContent.callsToAction"
      :key="index"
      :title="callToAction.title"
      :paragraph="callToAction.content" 
      :image="images[index].url"
      />
  </section>
</template>

<style lang="scss" scoped>
.section{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 1024px){
    flex-direction: row;
    padding: 0 20px;
  }
}
</style>