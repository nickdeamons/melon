<template>
     <div 
      class="h-[100px] mt-5 py-3 flex-col justify-items-end cursor-pointer mediaSource relative overflow-hidden"
      role="button"
    >
      <div class="absolute z-2 top-0 left-0 ">
        <slot name="image"></slot>
      </div>
      <div class="absolute z-50 bottom-0 left-0 text-white text-xs pl-1 leading-5">
        <slot name="sourceName"></slot>
      </div>
      <div
        @click="hide"
        @keydown.enter="hide"
        v-if="showOnStream"
        class="bg-white toggle text-red-700 py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
          Hide on Stream
        </div>
        <div
        v-if="!showOnStream"
        @click="show"
        @keydown.enter="show"
        class="bg-teal toggle text-white py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
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
  .mediaSource:before {
    display: block;
    content: ' ';
    position: absolute;
    width: 100%;
    height: 20px;
    z-index: 3;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%); 
  }
    .mediaSource .toggle{
        display: none;
    }
    .mediaSource:hover .toggle{
        display: block;
        top: 50%;
        transform: translateY(-50%);
    }
    
</style>