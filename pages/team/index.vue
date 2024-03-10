<script setup>
import yulyImage from '@/assets/yuly.png'

const team = [
  {
    id: 1,
    imageUrl: yulyImage,
    name: 'Yuly Alexandra Mendoza Bailón',
    role: `SISTEMA DE GESTIÓN DE LA CALIDAD CERTIFICADO ISO 9001:2015 ALCANCE: SERVICIOS DE CAPACITACIÓN, ASESORÍA EN SISTEMAS DE GESTIÓN Y MEJORA CONTINUA. CERTIFICADO SGS EC19/81841649`,
    email: 'yulymendoza@hotmail.com',
    phone: '0989752092',
    professionalDetails: [
      {
        category: 'Pre Grado',
        details: [
          {
            title: 'Analista de Sistemas de Información',
            date: '1991-08-31',
            institution: 'Escuela Superior Politécnica del Litoral'
          },
          {
            title: 'Título Profesional 2',
            date: 'Fecha 2',
            institution: 'Institución 2'
          }
        ]
      },
      {
        category: 'Post Grado',
        details: [
          {
            title: 'Licenciada en Sistemas de Información',
            date: '1997-06-20',
            institution: 'Escuela Superior Politécnica del Litoral'
          },
          {
            title: 'Diplomado de Calidad Total ',
            date: '1990',
            institution: 'Escuela Superior Politécnica del Litoral'
          },
          {
            title: 'Diplomados Escuela Superior Politécnica del Litoral - Contabilidad y Finanzas para la Dirección de Empresas - Estrategia, Gestión y Dirección de Empresarial. - Economía Aplicada para la Gestión Empresarial. - Economía de la Empresa, Los mercados y la regulación.',
            date: '2004-2005 192 horas --  2004-2005 192 horas -- 2004-2005 192 horas - 2004-2005 192 horas -- Fechas 2004-2005 192 horas.',
            institution: 'Escuela Superior Politécnica del Litoral'
          },
          {
            title: 'Maestría de Economía y Administración de Empresas',
            date: '2004-2006',
            institution: 'Escuela Superior Politécnica del Litoral'
          },
          {
            title: 'Maestría de Gestión Integral Calidad, Ambiente y Seguridad y Salud en el Trabajo',
            date: '2007-2008',
            institution: 'EOI Escuela de Negocios Madrid'
          },
          {
            title: 'Diplomado en Gestión de Proyectos ESAI Business School  -- Alineación estratégica de negocios y proyectos. --- Habilidades interpersonales claves en la gestión de proyectos. -- Gestión Eficiente de Programa, Portafolio y Tiempo en los proyectos. -- Agilismo y Design Thinking en la gestión de proyectos.',
            date: '2018 - 22-23-Sep - 20-21-Oct. - 24-25-Nov. - 08-09-Dic.',
            institution: 'UESS'
          },
          {
            title: 'Maestría Fintech e Innovación Financiera',
            date: '2022.M.00968.0066 2019-2020',
            institution: 'Universidad Politécnica de Catalunya – BarcelonaTech'
          },
          {
            title: 'Doctoranda en Administración y Gestión de Empresas',
            date: '2022.M.00968.0066 2019-2020',
            institution: 'Universidad Benito Juárez – Puebla - México'
          },
        ]
      },
      {
        category: "Certificaciones",
        details: [
          {
            title: 'ISO 9001 – ISO 27001',
            date: 'Auditor IRCA número 1191930 -- Principal Auditor IRCA – QMS Calidad -- IRCA Auditor – ISMS Seguridad de la Información',
            institution: 'Correspondiente'
          },
          {
            title: 'Certified ISO 31000 Lead Risk Manager - Certificate Number: RMLRM1009202-2015-12',
            date: 'December 16, 2015',
            institution: 'PECB'
          },
          {
            title: 'Facilitador Certificado',
            date: 'correspondiente',
            institution: 'IFSociety'
          },
          {
            title: 'Leader Coach: Rompiendo paradigmas en la nueva gerencia',
            date: 'correspondiente',
            institution: 'FCSH-ESPOL'
          },
          {
            title: 'ITIL® Foundation Certificate in IT Service Management',
            date: 'Octubre 2019 GR671070448YM',
            institution: 'ITIL®'
          },
        ]
      },
      {
        category: "Audtorías externas",
        details: [
          {
            title: 'Auditor Líder ISO 9001:2008 - 2015 certificado por IRCA / SGS Ecuador SGS No. SGS/ICS/550263/P/3475 JUL 9-13-2002'
          },
          {
            title: 'Auditor Líder OHSAS 18001 /Mayo 2007'
          },
          {
            title: 'Auditor Líder ISO 14001:2004 – SGS Junio 2008'
          },
          {
            title: 'Auditor Líder ISO 27001, 277001 –SGS Junio 2009 – Junio 2010'
          },
          {
            title: 'Auditor SMETA Responsabilidad Social'
          },
          {
            title: 'Auditor Líder ISO 45001:2018'
          },
          {
            title: 'Auditor Líder ISO 37001:2016'
          },
          {
            title: 'Auditor Líder ISO 20000-1:2018'
          },
          {
            title: 'Auditor Líder Economía Circular AFNOR XP X30-901'
          },
          {
            title: 'Implementador Líder ISO 27001:2013'
          },
          {
            title: 'Implementador Líder ISO 55001:2014'
          },
          {
            title: 'Implementador Líder ISO 37301:2021'
          },
          {
            title: 'Implementador Líder ISO 27001:2022'
          },
          {
            title: 'ITIL 4'
          }
        ]
      },
      {
        category: "Autitorías internas",
        details: [
          {
            title: 'Auditor Interno HACCP'
          },
          {
            title: 'Auditor Interno ISO 22000'
          },
          {
            title: 'Auditor Interno ISO 14000:2015'
          },
          {
            title: 'Auditor Interno OHSAS 18001:2007'
          },
          {
            title: 'Auditor Interno ISO 27001'
          },
          {
            title: 'Evaluador Interno ISO 26000'
          },
          {
            title: 'Auditor Interno ISO 22301'
          },
          {
            title: 'Auditor Interno ISO 17020'
          },
          {
            title: 'Auditor Interno ISO 17021'
          },
          {
            title: 'Auditor Interno ISO 17025'
          },
          {
            title: 'Auditor Interno Integrado ISO 9001- ISO 14000- OHSAS 18001- SA8000 SGS No. SGS/SSC/ECU/QMS/0624901/2004'
          }
        ]
      },
      {
        category: "Formación de formadores",
        details: [
          {
            title: "Registro Senecyt MDT-3106-CCL-320470",
            date: "válido del 10/03/2022 al 10/03/2027"
          }
        ]
      },
      {
        category: "Especialista Residuos Cero y Diseño de Negocios Circulares - AENOR",
        details: [
          {
            title: "Economía circular, modelos y oportunidades",
          },
          {
            title: "Mapeo de residuos",
          },
          {
            title: "Gestión de residuos",
          },
          {
            title: "Aplicación de estrategias circulares",
          },
          {
            title: "La economía circular y su impacto en la acción climática",
          },
          {
            title: "Diseño de modelos de negocio circular",
          }
        ]
      },
    ]
  }, 
] 
</script>

<template>
  <div class="container">
    <h3 class="container-title">Equipo</h3>
    <div class="container-team-cards">
      <teamCard v-for="member in team" :key="member.id" :imageUrl="member.imageUrl" :name="member.name" :role="member.role" :email="member.email" :phone="member.phone" :professionalDetails="member.professionalDetails" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  &-title {
    font-size: 2rem;
  }
  &-team-cards {
    max-width: 600px;
    display: flex;
    gap: 2rem;
  }
}
</style>
