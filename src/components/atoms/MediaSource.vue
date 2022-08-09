<template>
     <div 
      class="h-[100px] mt-5 py-3 flex-col justify-items-end cursor-pointer mediaSource relative"
      role="button"
    >
      <div class="absolute z-2 top-0 left-0">
        <slot name="image"></slot>
      </div>
      <div
        @click="showScreen"
        @keydown.enter="showScreen"
        class="bg-teal hide text-white py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
          Show on Stream
      </div>
      <div
        @click="hideScreen"
        @keydown.enter="hideScreen"
        class="bg-white hide text-red-700 py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">
          Hide on Stream
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useLayoutStore } from "../../store";

export default defineComponent({
  setup() {
    const store = useLayoutStore();
    return {
      store
    }
  },
  methods: {
    showScreen(event:any) {
      event.preventDefault();
      this.store.shareScreen();
    },
    hideScreen(event:any) {
      event.preventDefault();
      this.store.hideScreen();
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
</style>