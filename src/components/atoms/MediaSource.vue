<template>
     <div 
      class="h-[100px] mt-5 py-3 flex-col justify-items-end cursor-pointer mediaSource relative overflow-hidden"
      role="button"
    >
      <div class="absolute z-2 top-0 left-0 ">
        <slot name="image"></slot>
      </div>
      <div
        @click="show"
        @keydown.enter="show"
        class="bg-teal hide text-white py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
          Show on Stream
      </div>
      <div
        @click="hide"
        @keydown.enter="hide"
        v-if="showOnStream"
        class="bg-white hide text-red-700 py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
          Hide on Stream
        </div>
        <div
        v-if="!showOnStream"
        @click="show"
        @keydown.enter="show"
        class="bg-teal hide text-white py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
          Show on Stream
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useLayoutStore } from "../../store";

export default defineComponent({
  props: {
    mediaType: {
      type: String,
      default: 'webcam'
    }
    
  },
  setup() {
    const store = useLayoutStore();
    return {
      store
    }
  },
  computed: {
    showOnStream() {
      if(this.mediaType === 'webcam') {
        return this.store.webCamVisible;
      } else {
        return this.store.screenShareVisible;
      }
    }
  }, 
  methods: {
    show(event:any) {
      event.preventDefault();
      if(this.mediaType === 'webcam') {
        this.store.webCamVis();
      } else {
        this.store.shareScreenVis();
      }
    },
    hide(event:any) {
      event.preventDefault();
      // this.store.hide();
      if(this.mediaType === 'webcam') {
        this.store.hideWebcam();
      } else {
        this.store.hideScreen();
      }
    }
  }
});
</script>
<style scoped>
    .mediaSource .hide{
        display: none;
    }
    .mediaSource:hover .hide{
        display: block;
    }
    .mediaSource .show {
      display: none;
    }
    .mediaSource:hover .show{
        display: block;
    }
</style>