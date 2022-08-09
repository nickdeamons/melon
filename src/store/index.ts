import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    type: '',
    modalOpen: false,
    videoSize: 100,
    webcamFeed: false,
    screenShare: false,
    webcamVisible: false,
    screenShareVisible: false,
  }),
  actions: {
    setLayoutType(type: string) {
      this.type = type
    },
    /* These functions control the state of the modal window 
      Allowing users to add or remove sources to the stream */
    openModal() {
      this.modalOpen = true
    },
    closeModal() {
      this.modalOpen = false
    },
    /* These functions control the state of the webcam
      Allowing users to add or remove sources to the stream */
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
