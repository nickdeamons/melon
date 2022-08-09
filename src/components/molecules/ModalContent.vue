<template>
  <div class="bg-white p-10 relative block max-w-[600px] mx-auto">
    <div class="font-bold text-xl mb-10">Add a new media source</div>
    <div class=" grid gap-3 grid-cols-2">
        <modal-block 
            class="pointer" 
            role="button"
            tabindex="0"
            :class="{'disabled': store.screenShare}"
            @keydown.enter="(event) => {
                selectMedia(event, 'screenshare')
            }"
            @click="(event) => {
                selectMedia(event, 'screenshare')
            }"
            >
            <template v-slot:content >
                <div class="text-lg font-bold " >
                    Screenshare
                </div>
                <div class="mt-3 text-gray-500">
                    Share your entire screen, window or a specific Chrome tab
                </div>
            </template>
        </modal-block>
        <modal-block 
            class="pointer" 
            role="button"
            :class="{'disabled': store.webcamFeed}"
            @click="(event) => {
                selectMedia(event, 'webcam')
            }"
            @keydown.enter="(event) => {
                selectMedia(event, 'webcame')
            }"
        >
            <template v-slot:content>
                <div class="text-lg font-bold " >
                    Video Feed
                </div>
                <div class="mt-3 text-gray-500">
                    Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera
                </div>
            </template>
        </modal-block>
    </div>
  </div>
</template>
<script lang="ts">
/*
    This is the content holder for the modal contents.
*/
import {defineComponent} from 'vue';
// import the generalized modal block
import ModalBlock from '../atoms/ModalBlock.vue'
import { useLayoutStore } from '../../store';
export default defineComponent({
    setup() {
        // pass the store to the component
        const store = useLayoutStore();
        return {
            store
        }
    },
  components: { ModalBlock },
    methods: {
        selectMedia(event:any, mediaType:string):void {
            event.preventDefault();
            if(mediaType === 'webcam') {
                // Show the webcam on the screen
                this.store.shareWebcam();
                this.store.closeModal();
            }
            if(mediaType === 'screenshare') {
                // Share the screen
                this.store.closeModal();
                this.store.shareScreen();
            } 
        }
    }
})
</script>

<style>
    .disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.8;
    }
</style>