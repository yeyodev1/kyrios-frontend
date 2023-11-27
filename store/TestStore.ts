import { defineStore } from "pinia";

interface Test {
  id: string;
  name: string;
  description: string;
}

const useTestStore = defineStore("testStore", {
	state: () => ({
		tests: [
			{
				id: "iso27001",
				name: "ISO 27001",
				description:
					"Seguridad de la información y la gestión de riesgos.",
			},
			{
				id: "iso22301",
				name: "ISO 22301",
				description:
					"Continuidad de negocios y la gestión de la resiliencia.",
			},
			{
				id: "iso20000",
				name: "ISO 20000",
				description:
					"Gestión de servicios de tecnologías de la información.",
			},
		],
    selectedTest: null as Test | null
	}),
  actions: {
    selectTest(testId: string) {
      const test = this.tests.find(t => t.id === testId);
      if(test) {
        this.selectedTest = test;
      } else {
        console.error('test not found'); 
      }
    }
  }
});

export default useTestStore;