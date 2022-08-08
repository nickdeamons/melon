<template>
  <div class="py-8 px-8">
    <div class="aspect-video bg-black w-full relative">
        <div class="absolute top-0 left-0">
            <img src="../../assets/screenshare-image.png" class="object-fit" />
        </div>
        <div class="absolute top-0 left-0">
            <img src="../../assets/webcam-image.png"  class="object-fit" />
        </div>
    </div>
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
