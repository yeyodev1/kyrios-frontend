<script setup>
import auditoria from '../assets/auditoria.jpeg'
import implementacion from '../assets/implementacion.jpeg'
import capacitacion from '../assets/capacitacion.jpeg'
import socialIso from '../assets/socialIso2600.jpeg'
import image from '../assets/genericImage.jpeg'
import image2 from '../assets/genericImage2.jpeg'
import image3 from '../assets/genericImage3.jpeg'
import image4 from '../assets/genericImage4.jpeg'
import image5 from '../assets/genericImage5.jpeg'
import image6 from '../assets/genericImage6.jpeg'
import image7 from '../assets/genericImage7.jpeg'
import image8 from '../assets/genericImage8.jpeg'
import image9 from '../assets/genericImage9.jpeg'
import image10 from '../assets/genericImage10.jpeg'
import image11 from '../assets/genericImage11.jpeg'
import image12 from '../assets/genericImage12.jpeg'
</script>

<template>
  <h3 class="title">
    Nuestros servicios
  </h3>
  <div class="container">
    <CallToAction
      title="Capacitación, Asesoría y Auditoria en ISO 9001, 14001, 45001, 27001, 27701, 27017, 27018,
27032, 22301, 20000-1, 26000, 28000, 39001, 37001, 50001, 55001, 37301, 39001 entre otras."  
      subtitle=""
      content=" Nos especializamos en promover la mejora continua y asegurar el cumplimiento de normativas en distintas industrias, garantizando eficiencia operativa y protección de datos."
      :imageUrl= capacitacion
      />
    <CallToAction
      title="Capacitación, Asesoría y Auditoría en ISO 17020, ISO 17021, ISO 17024, ISO 17025, ISO 17065"  
      subtitle=""
      content="Estos servicios están diseñados para mejorar la competencia de los organismos de inspección, certificación y laboratorios, asegurando la calidad y confiabilidad en sus operaciones y resultados."
      :imageUrl= implementacion
      :inverted="true"
      />
    <CallToAction
      title="Implementación y Auditoría de Comercio Ético de los Afiliados a Sedex (SMETA)"  
      subtitle=""
      content="Brindamos servicios de implementación y auditoría del Comercio Ético de los Afiliados a Sedex (SMETA), enfocándonos en promover prácticas comerciales responsables y éticas. A través de estos servicios, ayudamos a las organizaciones a alinear sus operaciones con los principios de responsabilidad social y ambiental, garantizando transparencia y mejora continua en sus cadenas de suministro."
      :imageUrl=auditoria
      />
    <CallToAction
      title="Responsabilidad Social ISO 26000 – Reporte de Sostenibilidad GRI"  
      subtitle=""
      content="Ofrecemos asesoría y apoyo en la implementación de la Responsabilidad Social según ISO 26000, así como en la elaboración de Reportes de Sostenibilidad GRI. Nos centramos en integrar prácticas de sostenibilidad y responsabilidad social en las estrategias corporativas, asegurando que las organizaciones no solo cumplan con los estándares internacionales, sino que también mejoren su impacto social y ambiental de manera significativa y medible."
      :imageUrl=socialIso
      :inverted="true"
      />
    <CallToAction
      title="Capacitación y Asesoría FSSC 22000, HACCP, BMP, SSOP entre otras."  
      subtitle=""
      content="Especializados en seguridad alimentaria, abarcamos estándares y sistemas como FSSC 22000, HACCP, Buenas Prácticas de Manufactura (BMP) y Procedimientos Estándar de Operación de Sanitización (SSOP). Nuestro enfoque se centra en fortalecer la gestión de la inocuidad alimentaria, asegurando el cumplimiento de regulaciones y la mejora continua de procesos de producción y manejo de alimentos."
      :imageUrl=image
      />
    <CallToAction
      title="Gestión de Riesgos ISO 31000"  
      subtitle=""
      content="Enfocados en la gestión integral de riesgos, abordamos la norma ISO 31000 para proporcionar un marco sistemático y procesos para identificar, evaluar y gestionar los riesgos de manera efectiva. Este enfoque permite a las organizaciones mejorar la toma de decisiones, aumentar la probabilidad de alcanzar sus objetivos y minimizar las pérdidas mediante la implementación de estrategias de gestión de riesgos coherentes y eficaces."
      :imageUrl=image2
      :inverted="true"
      />
    <CallToAction
      title="Economía Circular y Compras sostenibles ISO 20400"  
      subtitle=""
      content="Centrándonos en la sostenibilidad y eficiencia de recursos, abordamos la ISO 20400 para promover la economía circular y las compras sostenibles. Este enfoque orienta a las organizaciones hacia la adopción de prácticas de compra que consideran aspectos ambientales, sociales y económicos, fomentando un ciclo de vida de productos y servicios que minimiza el impacto negativo en el medio ambiente y la sociedad, al tiempo que maximiza la eficiencia de los recursos utilizados."
      :imageUrl=image3
      />
    <CallToAction
      title="Ley de protección de datos personales"  
      subtitle=""
      content="Abordamos la ley de protección de datos personales con un enfoque integral para asegurar el manejo adecuado y seguro de la información personal, cumpliendo con regulaciones vigentes. Este marco busca proteger la privacidad de los individuos y garantizar la confidencialidad, integridad y disponibilidad de los datos personales."
      :imageUrl=image4
      :inverted="true"
      />
    <CallToAction
      title="Administración de Bodegas"  
      subtitle=""
      content="Nuestro enfoque en la administración de bodegas se centra en optimizar la eficiencia y organización del almacenamiento, manejo de inventarios y logística. Implementamos prácticas que aseguran una gestión efectiva, reduciendo costos operativos y mejorando el servicio al cliente mediante sistemas y procesos que maximizan el espacio y agilizan las operaciones."
      :imageUrl=image5
      />
    <CallToAction
      title="Gerencia estratégica de Costos ABC"  
      subtitle=""
      content="La gerencia estratégica de costos ABC (Costeo Basado en Actividades) se enfoca en identificar y asignar los costos de manera más precisa a los productos y servicios, basándose en el consumo real de recursos. Este enfoque permite una mejor comprensión de dónde y cómo se generan los costos, facilitando la toma de decisiones estratégicas para optimizar recursos y mejorar la rentabilidad."
      :imageUrl=image6
      :inverted="true"
      />
    <CallToAction
      title="Análisis y mejora de procesos"  
      subtitle=""
      content=""
      :imageUrl=image7
      />
      <CallToAction
        title="LEAN Production"  
        subtitle=""
        content="Este enfoque busca optimizar el flujo de trabajo, reducir tiempos de ciclo y minimizar los costos operativos, promoviendo una cultura de mejora continua y eficiencia en la manufactura."
        :imageUrl=image8
        :inverted="true"
        />
      <CallToAction
        title="Mejora de Servicio al Cliente"  
        subtitle=""
        content=""
        :imageUrl=image9
        />
      <CallToAction
        title="Gestión de Proyectos"  
        subtitle=""
        content="La gestión de proyectos implica la planificación, ejecución y monitoreo de proyectos para alcanzar objetivos específicos dentro de un plazo determinado, asegurando el uso eficiente de recursos. Este servicio se enfoca en aplicar metodologías y herramientas que permiten controlar el alcance, tiempo, costo y calidad, facilitando la entrega exitosa de proyectos que cumplen con las expectativas de los stakeholders."
        :imageUrl=image10
        :inverted="true"
        />
      <CallToAction
        title="ITIL"  
        subtitle=""
        content="
ITIL se centra en las mejores prácticas para la gestión de servicios de TI, proveyendo un marco para entregar servicios de tecnología de la información eficientes y alineados con las necesidades del negocio. Este enfoque mejora la calidad del servicio de TI, gestionando procesos, funciones y roles de manera efectiva."
        :imageUrl=image11
        />
      <CallToAction
        title="Formador de Formadores"  
        subtitle=""
        content=""
        :imageUrl=image12
        :inverted="true"
        />
      <Contact/>
  </div>
</template>

<style lang="scss" scoped>
.title {
  padding: 40px;
  text-align: center;
  font-size: $h2-font-size;
  color: $red;
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