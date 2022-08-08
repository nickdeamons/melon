<template>
  <div class="py-8 px-8">
    <canvas class="aspect-ratio bg-gray-500"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const handleClick = (event:any) => {
  console.log(event)
}

export default defineComponent({
    setup() {
        
    },
    components: {},
    methods: {
      handleClick
    }
})

</script>
<style scoped>

</style>
