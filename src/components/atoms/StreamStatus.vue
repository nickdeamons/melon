<template>
  <div class="text-red absolute z-10 r-0 top-2 pulse">{{text}}</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    props: {
        text: String
    }
})
</script>

<style scoped>
    .pulse {

    }
</style>