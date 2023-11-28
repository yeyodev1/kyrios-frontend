import { defineStore } from "pinia";

interface Test {
  id: string;
  name: string;
  description: string;
}
interface ResponseOption {
  value: number;
  description: string;
}

interface SatisfactionQuestion {
  question: string;
  response: ResponseOption | null;
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
				id: "iso27001",
				name: "ISO 27001",
				description:
					"Seguridad de la información y la gestión de riesgos.",
				satisfactionQuestions: [
          {
            question: "Pregunta 1",
            response: null,
          },
          {
            question: "Pregunta 2",
            response: null,
          },
          {
            question: "Pregunta 3",
            response: null,
          },
          {
            question: "Pregunta 4",
            response: null,
          },
          {
            question: "Pregunta 5",
            response: null,
          },
          {
            question: "Pregunta 6",
            response: null,
          },
          {
            question: "Pregunta 7",
            response: null,
          },
          {
            question: "Pregunta 8",
            response: null,
          },
        ],	
			},
			{
				id: "iso22301",
				name: "ISO 22301",
				description:
					"Continuidad de negocios y la gestión de la resiliencia.",
				satisfactionQuestions: [
          {
            question: "Pregunta 1",
            response: null,
          },
          {
            question: "Pregunta 2",
            response: null,
          },
          {
            question: "Pregunta 3",
            response: null,
          },
          {
            question: "Pregunta 4",
            response: null,
          },
          {
            question: "Pregunta 5",
            response: null,
          },
          {
            question: "Pregunta 6",
            response: null,
          },
          {
            question: "Pregunta 7",
            response: null,
          },
          {
            question: "Pregunta 8",
            response: null,
          },
        ],
			},
			{
				id: "iso20000",
				name: "ISO 20000",
				description:
					"Gestión de servicios de tecnologías de la información.",
				satisfactionQuestions: [
          {
            question: "Pregunta 1",
            response: null,
          },
          {
            question: "Pregunta 2",
            response: null,
          },
          {
            question: "Pregunta 3",
            response: null,
          },
          {
            question: "Pregunta 4",
            response: null,
          },
          {
            question: "Pregunta 5",
            response: null,
          },
          {
            question: "Pregunta 6",
            response: null,
          },
          {
            question: "Pregunta 7",
            response: null,
          },
          {
            question: "Pregunta 8",
            response: null,
          },
        ],
			},
		],
		responseOptions,
    selectedTest: null as Test | null,
	}),
  actions: {
    selectTest(testId: string) {
      const test = this.tests.find(t => t.id === testId);
      if(test) {
        this.selectedTest = test;
      } else {
        console.error('test not found'); 
      }
    },
		setResponse(testId: string, questionIndex: number, responseValue: number) {
      const test = this.tests.find(t => t.id === testId);
      const responseOption = this.responseOptions.find(option => option.value === responseValue) || null;
      if (test && typeof test.satisfactionQuestions[questionIndex] !== 'undefined') {
        test.satisfactionQuestions[questionIndex].response = responseOption;
      }
    },
  }
});

export default useTestStore;