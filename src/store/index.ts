import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    type: '',
    modalOpen: false,
    webcamFeed: false,
    screenShare: false,
    webCamVisible: false,
    screenShareVisible: false,
    multiLayout: 'full',
    camSize: 'full',
    // layout options: 50-50, 66-33, small-video
  }),
  getters: {
    onlyWebcam():boolean {
      return this.webcamFeed && this.webCamVisible && !this.screenShareVisible
    },
    onlyScreenshare():boolean {
      return this.screenShareVisible && this.screenShare && !this.webCamVisible
    },
    webCamAndScreenShare():boolean {
      return this.screenShareVisible && this.webCamVisible
    },
    layoutClasses():String {
      if (this.multiLayout === '25-l') {
        return ''
      }
      if (this.multiLayout === '25-r') {
        return ''
      }
      if (this.multiLayout === '66-33') {
        return ''
      } else {
        return ''
      }
    },
    screenSizeClasses():String {
      if (this.multiLayout === '66-33') {
        return 'w-2/3'
      }
      else {
        return 'w-full'
      }
    },
    camSizeClasses():String {
      if (this.multiLayout === 'full') {
        return 'w-full object-cover'
      }
      if (this.multiLayout === '25-r') {
        return 'absolute right-3 bottom-3 w-1/4'
      }
      if (this.multiLayout === '25-l') {
        return 'absolute left-3 bottom-3 w-1/4'
      } else {
        return 'w-1/3'
      }
    },
    camOnlyClasses():String {
      if(this.camSize === '60')  {
        return 'w-3/5 mx-auto'
      }
      if(this.camSize === '80')  {
        return 'w-4/5 mx-auto'
      } else {
        if(this.camSize === 'full' && this.multiLayout === '66-33') {
          return 'h-full'
        } else {
          return 'w-full mx-auto'
        }
      }
    },
  },
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
    webCamVis() {
      this.webCamVisible = true
    },
    hideWebcam() {
      this.webCamVisible = false
    },
    shareScreen() {
      this.screenShare = true
    },
    shareScreenVis() {
      this.camSize = 'full'
      this.multiLayout = '25-l'
      this.screenShareVisible = true
    },
    hideScreen() {
      this.setLayoutSizes('full')
      this.multiLayout = 'full'
      this.screenShareVisible = false
    },
    setCamSize(camSize:string) {
      this.camSize = camSize
    },
    setLayoutSizes(layoutType:string) {
      this.camSize = 'full'
      this.multiLayout = layoutType
    }
  },
})
