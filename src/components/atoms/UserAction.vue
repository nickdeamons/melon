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
  <span @click="action" @keydown.enter="action">
    {{ buttonText }}
  </span>
</template>
