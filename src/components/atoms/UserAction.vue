<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    buttonText: String,
    action: Function,
  },
  setup() {},
});
</script>
<template>
  <span @click="action" @keydown.enter="action"
    class="py-4 px-2 cursor-pointer inline-block hover:bg-teal hover:text-white w-full font-bold"
  >
    {{ buttonText }}
  </span>
</template>
