import { defineStore } from "pinia";
import { isoTestTypes } from "~/enums/isoTestTypes";

import APITest from "~/services/Test/Test";
import useUserStore from "./UserStore";

const userStore = useUserStore();

const testService = new APITest(); 

interface TestQuestion {
  clause: string;
  questionText: string;
  answerOptions: string[];
  correctAnswer: string;
  userResponse?: string; 
}

interface Test {
  isoType: isoTestTypes; 
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
            clause: '',
            questionText: 'Pregunta de la muerte',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Pregunta 2',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Pregunta 3',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Pregunta 4',
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
            questionText: 'Pregunta 1',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Pregunta 2',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Pregunta 3',
            answerOptions: responseOptions.map(option => option.description),
            correctAnswer: ''
          },
          {
            clause: '',
            questionText: 'Pregunta 4',
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
      const testIndex = this.tests.findIndex(test => test.isoType === isoType);
      if(testIndex !== -1) {
        this.tests[testIndex].questions[questionIndex].userResponse = responseValue; 
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
        const response = await testService.createTest({ ...payload, userResponses: this.tests.map(test => test.questions.map(question => question.userResponse)) });
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