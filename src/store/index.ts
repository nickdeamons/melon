import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    type: '',
    modalOpen: false,
    videoSize: 100,
    webcamFeed: false,
    screenShare: false,
  }),
  actions: {
    setLayoutType(type: string) {
      this.type = type
    },
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
    shareWebcam() {
      this.webcamFeed = true
    },
    hideWebcam() {
      this.webcamFeed = false
    },
    shareScreen() {
      this.screenShare = true
    },
    hideScreen() {
      this.screenShare = false
    }
  },
})
