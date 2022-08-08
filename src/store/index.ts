import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({ type: '', modalOpen: true }),
  actions: {
    setLayoutType(type:string) {
      this.type = type
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    }
  },
})
