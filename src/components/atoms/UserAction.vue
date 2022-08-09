<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    buttonText: String,
    action: {
      type: Function,
      required: true,
      default: () => {}
    },
  },
  setup() {},
});
</script>
<template>
  <span 
    @click="(event) => action(event)" 
    @keydown.enter="(event) => action(event)"
    class="bg-offWhite rounded-[4px] py-4 px-2 cursor-pointer inline-block hover:bg-teal hover:text-white w-full font-bold"
  >
    {{ buttonText }}
  </span>
</template>
