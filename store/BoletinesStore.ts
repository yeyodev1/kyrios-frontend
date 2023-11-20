import { defineStore } from "pinia";

import BoletinesService from "~/api/BoletinesService";

const boletinesService = new BoletinesService();

const useBoletinesStore = defineStore('userBoletinesStore', {
  state: () => ({
    boletin: null,
    allBoletines: []
  }),
  actions: {
    async getBoletineById(id: string) {
      try {
        const boletin = await boletinesService.getBoletine(id);
        return this.boletin = boletin
      } catch (error) {
        console.error(error)
      }
    },
    async getAllBoletines() {
      try {
        const response = await boletinesService.getAllBoletines();
        this.allBoletines = response;
      } catch (error) {
        console.error(error)
      }
    }
  }
})

export default useBoletinesStore;