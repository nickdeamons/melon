<template>
  <div v-if="store.onlyScreenshare && store.screenShareVisible" class="flex justify-center">
    <!-- If screenshare only  -->
    <img src="/img/screenshare-image-only.png" class="block w-[100px]" />
  </div>
  <div v-else >
    <!-- If we are only showing our webcam on screen, present these options  -->
    <div v-if="store.onlyWebcam" class="flex justify-center">
        <img src="/img/webcam-only_full-screen.png"
            @click="(event) => {
                event.preventDefault();
                store.setCamSize('full')
            }"
            tabindex="0"

            class="block w-[100px] mx-2 cursor-pointer"
             />
       <img src="/img/webcam-only_80-percent.png" 
            @click="(event) => {
                event.preventDefault();
                store.setCamSize('80')
            }"
            tabindex="0"
            class="block w-[100px] mx-2 cursor-pointer" />
        <img src="/img/webcam-only_60-percent.png"
            @click="(event) => {
                event.preventDefault();
                store.setCamSize('60')
            }" 
            class="block w-[100px] mx-2 cursor-pointer" />
    </div>
    <!-- If we are showing our webcam and screen, present these options  -->
    <div v-if="store.webCamAndScreenShare" class="flex justify-center">
        <img :src="leftWebCamImage"
            class="block w-[100px] mx-2 cursor-pointer"
            tabindex="0"
            @click="(event) => {
                event.preventDefault();
                store.setLayoutSizes('25-l')
            }"
        />
        <img :src="rightWebCamImage" 
            class="block w-[100px] mx-2 cursor-pointer" 
            tabindex="0"
            @click="(event) => {
                event.preventDefault();
                store.setLayoutSizes('25-r')
            }"
        />
         <img :src="splitWebCamImage" 
            class="block w-[100px] mx-2 cursor-pointer"
            tabindex="0"
            @click="(event) => {
                event.preventDefault();
                store.setLayoutSizes('66-33')
            }"
            />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { useLayoutStore } from '../../store'
export default defineComponent({
    setup() {
        const store = useLayoutStore();
        return {
            store
        }
    },
    computed: {
        leftWebCamImage():string {
            if (this.store.webCamAndScreenShare && this.store.multiLayout === '25-l') {
               return '/img/webcam-screenshare_webcam-25-percent-left-align_selected.png'
            } else {
                return '/img/webcam-screenshare_webcam-25-percent-left-align.png'
                
            }
        },
        rightWebCamImage():string {
            if (this.store.webCamAndScreenShare && this.store.multiLayout === '25-r') {
               return '/img/webcam-screenshare_webcam-25-percent-right-align_selected.png'
            } else {
                return '/img/webcam-screenshare_webcam-25-percent-right-align.png'
                
            }
        },
        splitWebCamImage():string {
            if (this.store.webCamAndScreenShare && this.store.multiLayout === '66-33') {
               return '/img/webcam-33-percent_screenshare-66-percent_selected.png'
            } else {
                return '/img/webcam-33-percent_screenshare-66-percent.png'
                
            }
        }
    }
})
</script>

<style>

</style>