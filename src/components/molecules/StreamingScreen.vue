<template>
  <div class="py-8 px-8">
    <div class="aspect-video bg-black w-full relative overflow-hidden max-w-5xl mx-auto mb-3">
        <div 
          class="flex justify-center h-full"
          :class="{
            'flex-row align-center items-center': store.onlyWebcam
          }"
        >
          <div class="img" 
            v-if="store.screenShareVisible" 
            :class="store.screenSizeClasses"
          >
              <img src="/img/screenshare-image.png" 
                class=" block img "  
              />
          </div>
          <div class="img" 
            v-if="store.webCamVisible" 
            :class="store.camSizeClasses">
              <img src="/img/webcam-image.png"  
                class="block w-full object-cover img" 
                :class="store.camOnlyClasses"  
              />
          </div>
      </div>
    </div>
    <ScreenSizeSelect></ScreenSizeSelect>
      
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useLayoutStore } from "../../store"
import ScreenSizeSelect from "./ScreenSizeSelect.vue"

export default defineComponent({
    setup() {
        const store = useLayoutStore()
        return {
          store
        }
    },
    components: {
      ScreenSizeSelect
    },
})

</script>
<style scoped>
  .img {
    transition: all 0.75s;
  }
</style>
