<template>
     <div 
      class="bg-offWhite h-[100px] mt-5 py-3 flex-col justify-center cursor-pointer"
      role="button"
      @click="(event) => action(event)"
      @keydown.enter="(event) => action(event)"
    >
      <div class="text-4xl text-teal font-bold leading-7">+</div>
      <div class="font-bold text-md">Add Media Source</div>
      <div class="text-gray-500 text-sm">Screenshare, Camera</div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    action: {
      type: Function,
      default: () => {},
      required: true,
    }
  },
  setup() {},
});
</script>