<template>
  <div class="py-8 px-8">
    <div class="aspect-video bg-black w-full "></div>
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
