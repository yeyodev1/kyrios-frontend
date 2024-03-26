import { defineStore } from "pinia";
import { isoTestTypes } from "~/enums/isoTestTypes";

import APITest from "~/services/Test/Test";
import useUserStore from "./UserStore";

const testService = new APITest(); 

interface TestQuestion {
  process?: string;
  clause: string;
  questionText: string;
  answerOptions: string[];
  correctAnswer: string;
  userResponse?: string; 
}

interface Test {
  isoType: any; 
  company: string;
  date: Date;
  createdBy: string;
  questions: TestQuestion[];
}
interface ResponseOption {
  value: number;
  description: string;
}


const responseOptions: ResponseOption[] = [
  { value: 0, description: "Sin documentar ni implementar" },
  { value: 1, description: "Implementado pero no formalizado ni comunicado" },
  { value: 2, description: "Implementado, documentado pero requiere mejorar" },
  { value: 3, description: "Implementado listo para auditar" },
  { value: 4, description: "No aplica" },
];

const useTestStore = defineStore("testStore", {
	state: () => ({
		tests: [
			{
        isoType: isoTestTypes.ISO_27001,
        company: '',
        date: new Date(),
        createdBy: 'yeyodev',
        questions: [
          {
            process: 'TH',
            clause: '5.3: Separación de funciones',
            questionText: 'Se determinarán las funciones conflictivas y los ámbitos de responsabilidad contradictorios.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.10: Uso aceptable de la información y otros activos asociados',
            questionText: 'Se identificarán, documentarán y aplicarán normas para el uso aceptable y los procedimientos para el manejo de la información y otros activos asociados.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.12: Clasificación de la información',
            questionText: 'La información se clasificará   de acuerdo con las necesidades de seguridad   de la información de la    organización en función de la confidencialidad,    integridad, disponibilidad y    los requisitos pertinentes de las partes interesadas.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: 'Información de autenticación',
            questionText: 'La asignación y gestión de la información de autenticación se controlará mediante un proceso de gestión, incluido el asesoramiento al personal sobre el tratamiento adecuado de la información de autenticación.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'COMPRAS',
            clause: '5.19: Seguridad de la información en las relaciones con los proveedores',
            questionText: 'Se  definirán  e  implementarán  procesos y  procedimientos  para gestionar los riesgos de seguridad de la información asociados con el uso de los productos o servicios del proveedor.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'COMPRAS',
            clause: '5.20: Abordar  la seguridad de la información dentro de  los acuerdos con proveedores',
            questionText: 'Los requisitos pertinentes de seguridad de la información se establecerán y acordarán con cada proveedor en función del tipo de relación con el proveedor.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.28: Obtención de evidencias de incidentes',
            questionText: 'La organización debe establecer e implementar procedimientos para la identificación, recopilación, adquisición y preservación de evidencia relacionada con  eventos de seguridad de la información.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.29: Seguridad de la información durante ruptura',
            questionText: 'La organización debe planificar cómo mantener la seguridad de la información a un nivel apropiado durante la disrupción.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '5.30: Preparación de las TIC para la actividad empresarial',
            questionText: 'La preparación para las TIC se planificará, aplicará, mantendrá  y probará sobre la base de los objetivos de continuidad de las actividades y los requisitos de continuidad de las  TIC.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.33: Protección de registros',
            questionText: 'Los registros estarán protegidos contra pérdida, destrucción, falsificación, acceso no  autorizado y divulgación no autorizada.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.34: Privacidad y protección  de la información de identificación personal  (PII)',
            questionText: 'La organización debe   identificar y cumplir con los requisitos relacionados con  la preservación de la privacidad y la protección de la PII de acuerdo con las leyes   y regulaciones     aplicables   y los requisitos contractuales.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '5.35: Revisión independiente de la seguridad de la información',
            questionText: 'El enfoque de la organización para gestionar la seguridad de la información y su implementación, incluidas las personas, los procesos y las tecnologías, se revisará de forma independiente a intervalos planificados o cuando se produzcan cambios significativos.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '5.37: Procedimientos  operativos documentados',
            questionText: 'Los procedimientos operativos de las instalaciones de tratamiento de la información se documentarán y se pondrán a disposición del personal que los necesite.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TH',
            clause: '6.3: Concienciación, educación y capacitación sobre seguridad de la información',
            questionText: 'El personal de la organización y    las  partes  interesadas  pertinentes recibirán concienciación, educación  y capacitación  adecuadas sobre seguridad   de la información  y actualizaciones  periódicas  de la política de seguridad  de la información de la organización, políticas y procedimientos específicos del tema, según corresponda.   para su función laboral.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'SI',
            clause: '7.7: Escritorio y pantalla limpia',
            questionText: 'Se definirán y aplicarán adecuadamente normas de escritorio claras para los papeles y los soportes de almacenamiento extraíbles y normas claras sobre pantallas para las instalaciones de tratamiento de la información.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'ADM',
            clause: '7.9: Seguridad de los activos fuera de las instalaciones',
            questionText: 'Los activos externos estarán protegidos.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '7.10: Medios de almacenamiento',
            questionText: 'Los medios de almacenamiento se gestionarán durante todo su ciclo de vida de adquisición, uso, transporte y eliminación de acuerdo con el esquema de clasificación y los requisitos de manipulación de la organización.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '7.12: Seguridad del cableado',
            questionText: 'Los cables que transporten energía, datos o servicios de información de apoyo estarán protegidos contra interceptaciones, interferencias o daños.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.4: Acceso al código fuente',
            questionText: 'El acceso de lectura y escritura al código fuente, las herramientas de desarrollo y las bibliotecas de software se gestionarán adecuadamente.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.9: Gestión de la configuración',
            questionText: 'Las configuraciones, incluidas las configuraciones de   seguridad,   de hardware, software, servicios y redes se establecerán, documentarán, aplicarán, supervisarán y revisarán.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.10: Eliminación de información',
            questionText: 'La información almacenada en sistemas de información, dispositivos o en cualquier otro medio de almacenamiento se eliminará cuando ya no sea necesaria.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.12: Prevención de fuga de datos',
            questionText: 'Se aplicarán medidas de prevención de fuga de datos a los sistemas, redes y cualquier otro dispositivo que procese, almacene o transmita información sensible.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.15: Registro',
            questionText: 'Se producirán, almacenarán, protegerán y analizarán registros que registren actividades, excepciones, fallos y otros eventos relevantes.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.21: Seguridad de los servicios de red',
            questionText: 'Se identificarán, aplicarán y supervisarán los mecanismos de seguridad, los niveles de servicio y los requisitos de  servicio de los servicios de red.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.22: Segregación de redes',
            questionText: 'Los grupos de servicios de información, usuarios y sistemas de información se separarán en las redes de la organización.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.24: Uso de criptografía',
            questionText: 'Se definirán y aplicarán normas para el uso eficaz de la criptografía, incluida la gestión de claves  criptográficas.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.25: Ciclo de vida de desarrollo seguro',
            questionText: 'Se establecerán y aplicarán normas para el desarrollo seguro de programas informáticos y sistemas.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.26: Requisitos de seguridad de las aplicaciones',
            questionText: 'Los requisitos de seguridad de la información se identificarán, especificarán y aprobarán al desarrollar o adquirir aplicaciones.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.27: Arquitectura segura del sistema y Principios de ingeniería',
            questionText: 'Se establecerán, documentarán, mantendrán y aplicarán principios para la ingeniería de sistemas seguros a  cualquier actividad de desarrollo de sistemas de  información.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.28: Codificación segura',
            questionText: 'Los principios de codificación segura se aplicarán al desarrollo de software.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.29: Pruebas de seguridad en desarrollo y aceptación',
            questionText: 'Los procesos de pruebas de seguridad se definirán y aplicarán en el ciclo de vida del desarrollo.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            process: 'TIC',
            clause: '8.33: Información de la prueba',
            questionText: 'La información del ensayo se seleccionará, protegerá y gestionará adecuadamente.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
        ]
      },
      {
        isoType: isoTestTypes.ISO_22301,
        company: '',
        date: new Date(),
        createdBy: 'yeyodev',
        questions: [
          {
            clause: '',
            questionText: 'La organización debe determinar las cuestiones externas e internas que son pertinentes para su propósito y que afectan su capacidad de lograr los resultados deseados de su SGCN. NOTA Estas cuestiones pueden estar afectadas por los objetivos generales de la organización, sus productos y servicios y el tipo y nivel de riesgo que puede o no aceptar. <Se tienen análisis de prioridades a recuperar en caso de desastre se han considerado objetivos estrégicos>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Al establecer su SGCN, la organización debe determinar: a)  las partes interesadas que son pertinentes para el SGCN, y b) los requisitos pertinentes de esas partes interesadas. <Se dequiere detallar qué requisitos debe cumplir la empresa a fin de asegurar el cumplimiento en caso de un evento disruptivo>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe: a) implementar y mantener un proceso para identificar, tener acceso a y evaluar los requisitos legales y reglamentarios relacionados con la continuidad de sus productos, servicios, actividades y recursos. b) asegurarse de que estos requisitos legales, reglamentarios y otros aplicables se tengan en cuenta en la implementación y el mantenimiento de su SGCN. c) documentar esta información y mantenerla actualizada. <Se dequiere detallar qué requisitos debe cumplir la empresa a fin de asegurar el cumplimiento en caso de un evento disruptivo>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar los límites y la aplicabilidad del SGCN para establecer su alcance. Al determinar el alcance, la organización debe considerar: a)    las cuestiones internas y externas indicados en el apartado 4.1; b) los requisitos indicados en el apartado 4.2; c) la misión, los objetivos y las obligaciones internas y externas. El alcance debe estar disponible como información documentada.',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe: a)  establecer las partes de la organización a ser incluidas en el SGCN, teniendo en cuenta sus localizaciones, tamaño, naturaleza y complejidad; b) identificar los productos y servicios a ser incluidos en el SGCN, Al definir el alcance, la organización debe documentar y explicar las exclusiones. Las exclusiones deben   ser   explicadas.  Las mismas no   deben   afectar la capacidad y la responsabilidad de   la organización de proveer continuidad del negocio y de las operaciones que cumplan con los requisitos del SGCN, según lo determinado por el análisis de impacto en el negocio o la evaluación de riesgos y los requisitos legales o reglamentarios. <Documentar el alcance de la Continuidad del Negocio enfocada a TI>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe   establecer, implementar, mantener y mejorar continuamente un SGCN, incluyendo los procesos necesarios y sus interacciones, de acuerdo con los requisitos de este e documento. <Involucrar a otros procesos en el alcance de la Continuidad de TI>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La alta dirección debe demostrar su liderazgo y compromiso con respecto al SGCN: a)  asegurándose de que se establezcan la política y los objetivos para el SGCN, y que éstos son compatibles con la dirección estratégica de la organización; b) asegurándose de la integración de los requisitos del SGCN con los procesos de negocio de la organización; b) asegurándose de que los recursos necesarios para el SGCN estén disponibles, c)  comunicando la importancia de una gestión de la calidad eficaz y conforme con los requisitos del SGCN;  d) asegurando que el SGCN logre los resultados esperados, e)  dirigiendo y apoyando a las personas para contribuir a la eficacia del SGCN,  f)   promoviendo la mejora continua, y g)  apoyando otros roles pertinentes de la dirección, para demostrar su liderazgo y compromiso en la forma en la que aplique a sus áreas de responsabilidad. NOTA este documento puede ser interpretado en términos generales en el sentido de aquellas actividades que son fundamentales para los propósitos de la existencia de la organización.  <Fortalecer el papel de la Gerencia General y Gerentes respecto a la Continuidad del Negocio de TI>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La alta dirección debe asegurarse que las responsabilidades y autoridades para los roles pertinentes se asignen y se comuniquen dentro de la organización. La alta dirección debe asignar la responsabilidad y autoridad para: a) asegurar que el SGCN cumpla con los requisitos de este documento, e b) informar sobre el desempeño del SGCN a la alta dirección. <Se cuenta con procedimientos para recuperación. Se requiere que se documenten en el descriptivo de cargo y se oficialice la asignación>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe establecer los objetivos de la continuidad del negocio para las funciones y niveles pertinentes. Los objetivos de la continuidad del negocio deben: a)  ser coherentes con la política de continuidad del negocio, b) ser medibles (si es práctico), c)  tener en cuenta los requisitos aplicables (véase 4.1 y 4.2), d) ser objeto de seguimiento; e)  comunicarse, f)   actualizarse, según corresponda. La organización debe mantener información documentada sobre los objetivos de continuidad del negocio. <Establecer tiempos de recupareción de las operaciones TI asociado a los niveles de servicios acordados con los responsables de procesos.>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Al planificar cómo lograr sus objetivos de continuidad del negocio, la organización debe determinar: a) qué se va a hacer; b) qué recursos se requerirán; c) quién será responsable; d) cuándo se finalizará; e) cómo se evaluarán los resultados. <Establecer un plan para lograr los objetivos planteados>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Al planificar cómo lograr sus objetivos de continuidad del negocio, la organización debe determinar: a) qué se va a hacer; b) qué recursos se requerirán; c) quién será responsable; d) cuándo se finalizará; e) cómo se evaluarán los resultados. <Establecer un plan para lograr los objetivos planteados>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Cuando la organización determine la necesidad de cambios en el SGCN, incluyendo los identificados en el Capítulo 10, estos cambios se deben llevar a cabo de manera planificada. La organización debe considerar: a) el propósito de los cambios y sus consecuencias potenciales; b) la integridad del SGCN; c) la disponibilidad de recursos; d) la asignación o reasignación de responsabilidades y autoridades <Se realizar el análisis de riesgos de los cambios y de su impacto en las Tis de Grupo INTACO Establecer planes para abordar los cambios previstos y no previstos>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar y proporcionar los recursos necesarios para el establecimiento, la implementación, el mantenimiento y la mejora continua del SGCN. <Establecer los recursos - inversión necesaria para la Continuidad de TI>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe: a)  determinar la competencia necesaria de las personas que realizan, bajo su control, un trabajo que afecta al desempeño de la continuidad del negocio, b) asegurarse de que estas personas sean competentes, basándose en la educación, formación o experiencia apropiadas, c)  cuando sea aplicable, tomar acciones para adquirir la competencia necesaria y evaluar la eficacia de las acciones tomadas, y d) conservar la información documentada apropiada como evidencia de la competencia. NOTA Las acciones aplicables pueden incluir, por ejemplo, la formación, la tutoría o la reasignación de las personas empleadas actualmente; o la contratación o subcontratación de personas competentes. <Personal con competencia técnica de TI, pero requiere conocer de la gestión de continuidad del negocio.>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Las personas que realizan trabajos bajo el control de la organización deben tomar conciencia de: a)  la política de continuidad del negocio, b) su contribución a la eficacia del SGCN, incluyendo los beneficios de una mejora en el desempeño de la gestión de continuidad del negocio, c)  las implicaciones del incumplimiento de los requisitos del SGCN y, d) su propio rol y responsabilidades antes, durante y después de los incidentes disruptivos. <Implementar toma de conciencia en todo el personal del Grupo INTACO, respecto al cumplimiento de políticas y procedimientos para la Continuidad del Negocio>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar la necesidad de comunicaciones internas y externas pertinentes al SGCN que incluyan: a) qué comunicar; b) cuándo comunicar; c) a quién comunicar; d) cómo comunicar; e) quién comunica. <Establecer plan de comunicaciones de los Planes de Continuidad del Negocio>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'El SGCN de la organización debe incluir: a)  la información documentada requerida por este documento y b) la información documentada que la organización determine como necesaria para la eficacia del SGCN. NOTA La extensión de la información documentada para un SGCN puede variar de una organización a otra, debido a: el tamaño de la organización y su tipo de actividades, procesos, productos y servicios y recursos; la complejidad de los procesos y sus interacciones; y la competencia de las personas. <Se cuenta con procedimiento de Controles y gestión documental a cargo del área de Procesos.>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'a)  identificación y descripción (por ejemplo, título, fecha, autor o número de referencia), b) formato (el idioma, versión de software, gráficos), y los medios de soporte (por ejemplo, papel, electrónico), c)  y la revisión y aprobación con respecto a la conveniencia y adecuación. <Se cuenta con procedimiento de controles y gestión documental a cargo del área de Procesos.>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'a)  esté disponible y sea idónea para su uso, donde y cuando se necesite; b) esté protegida adecuadamente (por ejemplo, contra pérdida de la confidencialidad, uso inadecuado o pérdida de la integridad). <Por implementar la disponibilidad de procesos y procedimientos del área>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'a)  distribución, acceso, recuperación y uso, b) almacenamiento y preservación, incluida la preservación de la legibilidad, c)  control de cambios (por ejemplo, control de versión), d) retención y disposición. La información documentada de origen externo, que la organización determina como necesaria para la planificación y la operación del SGCN, se debe identificar, según sea apropiado, y controlar. NOTA El acceso puede implicar una decisión en relación con el permiso, solamente para consultar la información documentada, o al permiso y a la autoridad para consultar y modificar la información documentada.  <Se requiere tener evicencias de la ejecución de pruebas de Plan de Continuidad>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe planificar, implementar y controlar los procesos necesarios para cumplir con los requisitos y para implementar las acciones determinadas en el apartado 6.1 mediante: a)  la determinación de los criterios para los procesos, b) la implementación del control de los procesos de acuerdo con los criterios, y c)  la conservación de la información documentada en la extensión necesaria para tener confianza en que los procesos se han llevado a cabo según lo planificado. La organización debe controlar los cambios planificados y revisar las consecuencias de los cambios no deseados, tomando acciones para mitigar cualquier efecto adverso, según sea necesario. La organización debe asegurarse de que los procesos subcontratados son controlados. <Se cuenta con Plan de Contigencia que se prueban Se cuenta con un proveedor que realiza las actividades a apoyo para las pruebas de contingencia>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe: a) implementar, y mantener un proceso sistemático para el análisis de impacto en el negocio y la evaluación de riesgos de incidentes disruptivos;  b)  revisar el análisis de impacto del negocio y la evaluación de riesgos a intervalos planificados y cuando existan cambios significativos, en la organización o su contexto en el que opera; NOTA La organización determina como se realiza el análisis de impacto en el negocio y la evaluación de riesgos. <Se conoce los servicios críticos  sus prioridades pero no está formalizado>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe usar el proceso de análisis de impacto del negocio para determinar las prioridades y los requisitos de continuidad del negocio. El proceso debe: a) definir los tipos de impacto y los criterios pertinentes para el contexto de la organización; b) la identificación de actividades que soportan el suministro de productos y servicios, c)  usar los tipos de impactos y los criterios para evaluar los impactos con el transcurso del tiempo resultantes de la interrupción de estas actividades; d) identificar los plazos de tiempo en los cuales los impactos de no reanudar las actividades serían inaceptables para la organización; NOTA 1 Esto puede referirse como el   período máximo tolerable de interrupción MTPD (por sus siglas en inglés, máximum tolerable periodo of disrupción). e)  establecer períodos de tiempo prioritarios en el tiempo identificado en d) para reanudar las actividades interrumpidas a una capacidad mínima aceptable especificada; NOTA  2 Este período de tiempo puede ser denominado objetivo de tiempo de recuperación RTO (por sus siglas en inglés, Recovery Time Objective) f)   utilizar el análisis para identificar las actividades prioritarias; g)  determinar los recursos que son necesarios para soportar las actividades prioritarias; h) determinar las dependencias, incluyendo socios y proveedores, y las interdependencias de las actividades prioritarias. ',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe implementar y mantener un proceso de evaluación de riesgos. NOTA En la norma ISO 31000 se aborda el proceso para la evaluación de riesgos. La organización debe: a)  identificar los riesgos de incidentes disruptivos para las actividades prioritarias de la organización y de sus recursos, b) analizar y valorar los riesgos identificados, c)  determinar cuáles riesgos requieren tratamiento. NOTA Los riesgos en este apartado son los relacionados con los incidentes disruptivos de las actividades del negocio. Los riesgos y oportunidades relacionados con la eficacia del sistema de gestión se abordan en 6.1. <Se conoce los riesgos pero no se basa en metodología ni en esquema de revisión y mejora continua>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Basándose en las salidas del análisis de impacto del negocio y la evaluación de riesgos, la organización debe identificar y seleccionar las estrategias de continuidad del negocio que considere las opciones para antes, durante y después de un incidente disruptivo.  Las estrategias de continuidad del negocio deben comprender una o más soluciones. <Se han establecido estrategias de recuperación pero requieren ser formalizadas>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La identificación debe basarse en estrategias y soluciones que: a)  Cumplan con los requisitos de continuidad y recuperación de las actividades prioritarias en el marco de tiempo identificado y la capacidad acordada; b) protejan las actividades prioritarias de la organización, c)  reduzcan la probabilidad de un incidente disruptivo; d) acorten los períodos de interrupción; e)  limiten los impactos de los incidentes disruptivos en los productos y servicios de la organización; f)   provean de la disponibilidad de los recursos adecuados. <Se han establecido estrategias de recuperación pero requieren ser formalizadas>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La selección debe basarse en estrategias y soluciones que: a)  Cumplan con los requisitos de continuidad y recuperación de las actividades prioritarias en el marco de tiempo identificado y la capacidad acordada; b) Consideren el tipo y nivel de riesgo que la organización puede o no aceptar; c)  Considere los costos y beneficios asociados. <Se han establecido estrategias de recuperación pero requieren ser formalizadas>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar los requisitos de recursos para   implementar las soluciones de continuidad de negocio seleccionadas.  Los tipos de recursos considerados deben incluir, pero no limitarse a: a)  las personas, b) la información y los datos, c)  infraestructura física como los edificios, el ambiente de trabajo y otras infraestructuras y servicios asociados, d) los equipos y los insumos, e)  los sistemas de tecnología de la información y la comunicación (TIC) f)   el transporte y la logística, g)  la financiación, y h) los socios y proveedores. <Se cuenta con recursos para la Continuidad TI, pero requieren formalizarse>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar los requisitos de recursos para   implementar las soluciones de continuidad de negocio seleccionadas.  Los tipos de recursos considerados deben incluir, pero no limitarse a: a)  las personas, b) la información y los datos, c)  infraestructura física como los edificios, el ambiente de trabajo y otras infraestructuras y servicios asociados, d) los equipos y los insumos, e)  los sistemas de tecnología de la información y la comunicación (TIC) f)   el transporte y la logística, g)  la financiación, y h) los socios y proveedores. <Se cuenta con recursos para la Continuidad TI, pero requieren formalizarse>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe implementar y mantener las soluciones seleccionadas de continuidad del negocio para que puedan ser activadas cuando sea necesario. <Se han implementado las soluciones pero requieren formalizarse>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe   implementar y mantener una   estructura de respuesta que   permitirá la advertencia y comunicación oportuna a las partes interesadas pertinentes.  La organización debe proveer de los planes y procedimientos para gestionar la organización durante el incidente disruptivo. Los planes y procedimientos deben   ser utilizados cuando sea necesario activar las soluciones de continuidad del negocio. La organización debe identificar y documentar los planes y procedimientos de continuidad del negocio basándose en las salidas de las estrategias y soluciones seleccionadas. Los procedimientos deben: a) ser específicos con respecto a las etapas inmediatas que deben tomarse durante un incidente disruptivo, b) ser flexibles para responder a los cambios en las condiciones internas y externas de un incidente disruptivo, c) enfocarse en el impacto de los incidentes que potencialmente podrían ser incidentes disruptivos, d) ser eficaces minimizando el impacto a través de la implementación de las soluciones apropiadas; e) asignar los roles y las responsabilidades para las tares durante los mismos. <Existen Planes de Contingencia que está ejecutandose pero requiere ser probados y mejorados continuamente.>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: '8.4.2.1 La organización debe implementar y mantener una estructura, identificando uno o más equipos responsables de dar respuesta a un incidente disruptivo. 8.4.2.2 Los roles y responsabilidades de cada equipo y las relaciones entre los equipos deben ser establecidos claramente.  8.4.2.3 En forma colectiva. Los equipos deben ser competentes para: a)  evaluar la naturaleza y el alcance de un incidente disruptivo y su impacto potencial, b) evaluar el impacto con límites predefinidos que justifican el inicio de una respuesta formal; c)  activar una respuesta apropiada de continuidad del negocio, d) planificar las acciones que necesitan ser realizadas; e)  establecer prioridades (utilizando la seguridad de la vida como primera prioridad); f)   realizar seguimiento a los efectos del incidente disruptivo y la respuesta de la organización; g)  activar las soluciones de continuidad del negocio; h) comunicarse con las partes interesadas pertinentes, las autoridades y, y los medios. <Se cuenta con un equipo de TI para la respuesta ante eventos disruptivos, pero requiere mejorar y extenderse a todos los sitios del Grupo INTACO>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'a)  personal identificado y sus suplentes con la responsabilidad necesaria, la autoridad y competencia para cumplir con el rol designado; b) procedimientos documentados para guiar sus acciones (ver 8.4.4), incluyendo aquellas para la activación, operación, coordinación y comunicación de la respuesta. <Se requiere formalizar el entrenamiento en la aplicación de los planes de continuidad>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe documentar y mantener procedimientos para: a)  la comunicación interna y externa con las partes interesadas pertinentes, incluyendo qué, cuando, a quién y cómo comunicar; b) recibir, documentar y responder a las comunicaciones de las partes interesadas, incluyendo cualquier sistema de alerta de riesgo nacional o regional o equivalente, c)  asegurar la disponibilidad de los medios de comunicación durante un incidente disruptivo, d) facilitar la comunicación estructurada con los servicios de respuesta de emergencia, e)  suministrar detalles sobre la repuesta de la organización a los medios siguiendo un incidente, incluyendo una estrategia de comunicación; f)   registrar los detalles sobre el incidente disruptivo, las acciones llevadas a cabo, y las decisiones tomadas. <Se requiere formalizar el esquema de activación de la continuidad>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'a)  alertar a las partes interesadas potencialmente afectadas por un incidente disruptivo real o inminente, b) asegurar   la   adecuada   coordinación   y   comunicación   entre   las   múltiples   organizaciones   de respuesta, Los procedimientos de alerta y comunicación deben ser ejercitados como parte del programa de ejercicios indicado en 8.5. <Requiere un esquema formal para comunicar a las partes interesadas de los eventos disruptivos>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: '8.4.4.1 La organización debe documentar y mantener planes y procedimientos de continuidad del negocio. Los planes de continuidad del negocio deben bridar orientación e información para apoyar a los equipos en la respuesta a un incidente disruptivo y dar apoyo a la organización con la respuesta y la recuperación. 8.4.4.2 En su conjunto los planes de continuidad del negocio deben contener: a)  Los detalles de las acciones que los equipos realizaran para: 1) Continuar y recuperar las actividades prioritarias en un período de tiempo predeterminado; 2) Realizar el seguimiento del impacto del incidente disruptivo y la respuesta de la organización al mismo; b) Una referencia a los límites predefinidos y los procesos para activar la respuesta; c)  Los procedimientos que permitan suministrar los productos y servicios a una capacidad acordada; d) Los detalles para gestionar inmediatamente las consecuencias de un incidente disruptivo teniendo en cuenta: 1) el bienestar de los individuos; 2) la prevención de pérdidas mayores o la inviabilidad de actividades prioritarias; 3) el impacto en el medioambiente. <Existen Planes de Continuidad parciales y por prioridades.  Éstos se deben formalizar>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'a) el propósito, alcance y objetivos; b) los roles y responsabilidades del equipo que implementará el plan; c) las acciones para implementar las soluciones; d) la información de apoyo necesaria para activar (incluyendo los criterios den), operar, coordinar y comunicar las acciones del equipo; e) las interdependencias internas y externas;  f) los recursos necesarios; g) los requisitos de informes; h) un proceso para retirarse del mercado. Cada plan debe ser usado y estar disponible en el momento y lugar en que sea necesario. <Documentar los planes de Continuidad considerando lo mínimo necesario para asegurar su operación eficaz>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe tener procesos documentados para restaurar y volver a las actividades de negocios de las medidas temporales adoptadas durante y después de un incidente. <Requiere formalizar los procedimientos de recuperación>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe implementar y mantener un programa de ejercicios y prueba para validar en el tiempo la eficacia de sus estrategias y soluciones de continuidad del negocio. La organización debe llevar a cabo ejercicios y pruebas que: a)  sean coherentes con los objetivos de continuidad del negocio, b) se basen en escenarios apropiados que están bien planificados con metas y objetivos claramente definidos, c)  desarrollen equipo de trabajo, competencias, confianza y conocimiento para aquellos que tienen roles que desempeñar relacionados con los incidentes disruptivos, d) tomados en conjunto, a través del tiempo validen sus estrategias y soluciones de continuidad del negocio, e) realicen informes formales post-ejercicio que contengan resultados, recomendaciones y acciones para implementar mejoras,f) sean revisados en el contexto de promover la mejora continua, y g)  sean llevados a cabo a intervalos planificados y cuando haya cambios significativos dentro de la organización o en el contexto en el que opera. La organización debe actuar sobre los resultados de sus ejercicios y pruebas para implementar los cambios y mejoras. <Requiere formalizar el programa de pruebas y ejercicios para lograr la toma de conciencia de todos los involucrados del Grupo INTACO>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe: a)  Evaluar la adecuación y eficacia del análisis de impacto del negocio, la evaluación de riesgo, las estrategias, soluciones, los planes y procedimientos, b) Llevar a cabo evaluaciones mediante revisiones, análisis, ejercicios, pruebas, informes posteriores a un incidente y evaluaciones de desempeño; c)  Realizar evaluaciones de la capacidad de continuidad del negocio de los socios y partes interesadas pertinentes; d) Evaluar el cumplimiento con los requisitos legales y reglamentarios aplicables, las buenas prácticas industriales y la conformidad con sus propios políticas y objetivos de continuidad del negocio e)  Actualizar la documentación y los procedimientos de forma oportuna. Estas   evaluaciones   deben   ser   realizadas   a   intervalos   planificados, después   de   un   incidente   o activación, y cuando ocurran cambios significativos. <Requiere formalizar y tener evidencia de implementación >',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar: a) qué necesita seguimiento y medición; b)  los métodos de seguimiento, medición, análisis y evaluación necesarios para asegurar resultados válidos; c) cuándo y quiénes deben llevar a cabo el seguimiento y la medición; d) cuándo y quiénes se deben analizar y evaluar los resultados del seguimiento y la medición. La organización debe conservar la información documentada apropiada como evidencia de los resultados. La organización debe evaluar el desempeño y la eficacia del SGCN. ',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La   organización   debe   realizar   auditorías   internas   a   intervalos   planificados   para   proporcionar información sobre como el SGCN: a)  es conforme con: 1) los requisitos propios de la organización para su SGCN; 2) los requisitos de este documento; b) es eficazmente implementado y mantenido.  <Formalizar las medidas para la Continudad del Negocio respecto a TI>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe: a) planificar, establecer, implementar y mantener uno o varios programas de auditoría que incluyan la frecuencia, los métodos, las responsabilidades, los requisitos de planificación y la elaboración de informes, que deben tener en consideración la importancia de los procesos involucrados, los cambios que afecten a la organización y los resultados de las auditorías previas; b) definir los criterios de la auditoría y el alcance para cada auditoría; c)  seleccionar los auditores y llevar a cabo auditorías para asegurarse de la objetividad y la imparcialidad del proceso de auditoría; d) asegurarse de que los resultados de las auditorías se informen a los gerentes pertinentes; e)  conservar información documentada como evidencia de la implementación del programa de auditoría y de los resultados de las auditorías; f)  asegurarse que se toman las acciones correctivas necesaria sin demora injustificada para eliminar las no conformidades y sus causas; g) asegurarse que las acciones de seguimiento de las auditorías incluyen la verificación de las acciones tomadas y el informe de los resultados de las verificaciones. <Se requiere formalizar la revisión independiente de los Planes de Continuidad para revisar los resultados y mejorar continuamente>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La alta dirección debe revisar el SGCN de la organización a intervalos planificados, para asegurarse de su conveniencia, adecuación y eficacia. <No se tiene implementado revisión de los resultados de la Continuidad del Negocio>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La revisión por la dirección debe incluir consideraciones sobre: a) el estado de las acciones de las revisiones por la dirección previas; b) los cambios en las cuestiones externas e internas que sean pertinentes al SGCN; c) la información sobre el desempeño del SGCN, incluidas las tendencias relativas a: 1) las no conformidades y acciones correctivas; 2) los resultados de seguimiento y medición; 3) los resultados de las auditorías; d) la retroalimentación de las partes interesadas; e) la necesidad de cambios en el SGCN, incluyendo la política y los objetivos; f)   los procedimientos y recursos que pueden ser usados por la organización para mejorar el desempeño y la eficacia del SGCN; g)  información sobre el análisis de impacto del negocio y la evaluación de riesgos; h) las salidas de la evaluación de la documentación y capacidades relacionadas con la continuidad del negocio; i)   los riesgos o cuestiones que no han sido abordados adecuadamente en una evaluación previa de riesgos; j)   las lecciones aprendidas y las acciones que surgieron de los incidentes o incidentes disruptivos; k)  las oportunidades de mejora continua. <No se tiene implementado revisión de los resultados de la Continuidad del Negocio>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: '9.3.3.1 Las salidas de la revisión por la dirección deben incluir las decisiones y acciones relacionadas con las oportunidades de mejora; cualquier necesidad de cambio en el SGCN y las necesidades de cambio del SGCN para mejorar la eficacia y eficiencia, incluyendo lo siguiente: a)  variaciones en el alcance del SGCN; b) la actualización del análisis de impacto del negocio, de la evaluación de riesgos, de las estrategias de continuidad de negocios, y las soluciones y los planes de continuidad del negocio, c)  la modificación de los procedimientos y controles para responder a las cuestiones internas o externos que puedan impactar en el SGCN,  d) cómo se medirá la eficacia de los controles. 9.3.3.2 La organización debe conservar información documentada como evidencia de los resultados de las revisiones por la dirección. La organización debe: a)  comunicar los resultados de la revisión de gestión a las partes interesadas pertinentes, y b) tomar las acciones apropiadas relacionadas con esos resultados. <No se tiene implementado revisión de los resultados de la Continuidad del Negocio>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: '10.1.1 La organización debe determinar las oportunidades para mejora e implementar cualquier acción necesaria para lograr los resultados deseados de su SGCN. 10.1.2 Cuando ocurra una no conformidad, la organización debe: a) reaccionar ante la no conformidad y, cuando sea aplicable: 1) tomar acciones para controlarla y corregirla; 2) hacer frente a las consecuencias; b) evaluar la necesidad de acciones para eliminar las causas de la no conformidad, con el fin de que no vuelva a ocurrir ni ocurra en otra parte, mediante: 1) la revisión de la no conformidad; 2) la determinación de las causas de la no conformidad; 3) la determinación de si existen no conformidades similares, o que potencialmente puedan ocurrir; c) implementar cualquier acción necesaria; d) revisar la eficacia de cualquier acción correctiva tomada; <No se tiene evidencia de mejora continua mediante la gestión de acciones correctivas o de mejora>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
        ]
      },
      {
        isoType: isoTestTypes.ISO_20000,
        company: '',
        date: new Date(),
        createdBy: 'yeyodev',
        questions: [
          {
            clause: '',
            questionText: 'La organización debe crear, implementar y mantener un plan de gestión de servicios. El plan debe tener en cuenta la política de gestión de servicios, los objetivos, riesgos y oportunidades de gestión de servicios, los requisitos de servicio y los requisitos especificados en este documento. <Existe una consecución de Planes de Servicio acorde al catálogo de servicios y los niveles de servicios acordados>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La  organización  debe  determinar  las  comunicaciones  internas  y  externas  relevantes  al  SGS  y  los servicios, que incluyan: <Se tiene comunicación sobre la mesa de servicio pero se requiere difundir a todos los involucrados>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe determinar y mantener el conocimiento necesario para apoyar el funciona- miento del SGS y los servicios. <Establecer esquema de conocimiento de la mesa de servicios>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Se deben definir los tipos de elementos de configuración (CI). Los servicios se deben clasificar como elementos de configuración (CI). <Se requiere formalizar la gestión de configuración para determinar la criticidad>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe presupuestar y contabilizar servicios o grupos de servicios de acuerdo con sus políticas y procesos de gestión financiera. <Formalizar el costeo de los servicios TI>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'La organización debe, a intervalos planificados: <Evaluar el uso de los servicios>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Los servicios nuevos o modificados deben diseñarse y documentarse para cumplir con los requisitos de servicio determinados en el apartado 8.2.2. El diseño debe incluir los elementos relevantes de entre los siguientes: <Implementar proceso de diseño de servicios>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Se deben evaluar y documentar los riesgos sobre la disponibilidad de los servicios a intervalos planifi- cados. La organización debe determinar los requisitos y objetivos de disponibilidad de los servicios. Los requisitos acordados deben tener en cuenta los requisitos de negocio relevantes, los requisitos de servicio, los SLAs y los riesgos. <Establecer controles para monitorear la disponibilidad de servicios>',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
        ]
      },
		],
		responseOptions,
    selectedTest: null as Test | null,
    testResults: [],
	}),
  actions: {
    selectTest(isoType: any) {
      const test = this.tests.find(test => test.isoType === isoType)
      if(test) {
        this.selectedTest = test;
      }
    },

    setResponse(isoType: any, questionIndex: any, responseValue: any) {
      const testIndex = this.tests.findIndex((test: Test) => test.isoType === isoType);
      if(testIndex !== -1) {
        (this.tests[testIndex].questions[questionIndex] as any).userResponse = responseValue; 
      }
    },

    setTestResults(isoType: any, results: any) {
      const testIndex = this.tests.findIndex(test => test.isoType === isoType);
      if (testIndex !== -1) {
        this.testResults = results;
      }
    },
    
    async submitTestResults(payload: any) {
      try {
        const response = await testService.createTest({ ...payload, userResponses: this.tests.map(test => test.questions.map(question => (question as any).userResponse)) });
        console.log('Test enviado con éxito', response.data);
        return response; 
      } catch (error) {
        console.error('Error al enviar el test:', error);
        throw error; 
      }
    },
  },
});

export default useTestStore;