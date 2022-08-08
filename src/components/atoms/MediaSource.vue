<template>
     <div 
      class="h-[100px] mt-5 py-3 flex-col justify-items-end cursor-pointer mediaSource relative"
      role="button"
      @click="action"
      @keydown.enter="action"
    >
      <div class="absolute z-1 top-0 left-0"><img src="../../assets/video-feed.png" /></div>
      <div class="bg-teal hide text-white py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">Show on Stream</div>
      <div class="bg-white hide text-red-700 py-3 px-4 z-40 absolute m-auto left-0 right-0 font-bold">Hide on Stream</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    action: Function,
  },
  setup() {},
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