import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++
    },
  },
})
