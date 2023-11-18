<template>
  <h3 class="title">
    Nuestros servicios
  </h3>
  <div class="container">
    <CallToAction
      title="Evaluación y Desarrollo de Proveedores y Auditorías"  
      subtitle="(Audiconfian S.A.)"
      content="Fomentamos la implementación de una gestión óptima de la cadena de suministros y el aumento del nivel de desempeño de los proveedores, lo que genera valor agregado para su organización a través del desarrollo mutuo tanto de los proveedores como de los gestores del proceso de adquisiciones."
      imageUrl="https://i.pinimg.com/236x/de/fc/f9/defcf9f27f764817f946415e87c19e67.jpg"
      buttonText="Agendar auditoría" 
      link="/"  />
    <CallToAction
      title="Asesoría en la Implementación de Sistemas de Gestión y Evaluación Tecnológica"  
      subtitle=""
      content="Ofrecemos asesoramiento y acompañamiento para la implementación de sistemas de gestión de Calidad, Ambiental, Seguridad y Salud Ocupacional, Seguridad Alimentaria, Continuidad de Negocios, Seguridad de la Información, Antisoborno, entre otros. Además, realizamos evaluaciones de tecnología y aplicaciones."
      imageUrl="https://i.pinimg.com/236x/de/fc/f9/defcf9f27f764817f946415e87c19e67.jpg"
      buttonText="Agendar auditoría" 
      :inverted="true"
      link="/"  />
    <CallToAction
      title="Capacitación"  
      subtitle=""
      content="Formamos a las personas en cualquier tema. Somos conscientes de que la organización requiere colaboradores competentes para desempeñar las responsabilidades diarias y cumplir con sus funciones de manera integral, con el fin de respaldar la consecución de los objetivos de la organización. De esta manera, logramos la mejora continua."
      imageUrl="https://i.pinimg.com/236x/de/fc/f9/defcf9f27f764817f946415e87c19e67.jpg"
      buttonText="Agendar capacitación" 
      link="/"  />
    <Contact/>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding: 40px;
  text-align: center;
  font-size: $h2-font-size;
  color: $blue;
}
.container {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  justify-content: center;
  align-items: center;
}
</style>