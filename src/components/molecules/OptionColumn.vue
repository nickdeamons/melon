<template>
  <div class="border-r-2 border-gray-300 px-3 py-4">
    <media-source v-if="store.screenShare" action="">
      <template v-slot:image>
        <img src="../../assets/screenshare-image.png" class="block w-full" />
      </template>
    </media-source>
    <media-source v-if="store.webcamFeed">
      <template v-slot:image>
        <img src="../../assets/webcam-image.png" class="block w-full" />
      </template>
    </media-source>
    <div v-if="!(store.screenShare && store.webcamFeed)">
      <user-action 
        :buttonText="'Add Source'" 
        :action="handleClick">
      </user-action>
    <add-media-source
      :action="handleClick">
      </add-media-source>
    </div>

    
  </div>
</template>

<script lang="ts">
import UserAction from "../atoms/UserAction.vue"
import AddMediaSource from "../atoms/AddMediaSource.vue"
import MediaSource from "../atoms/MediaSource.vue"
import { defineComponent } from "vue"

import { useLayoutStore } from "../../store"

export default defineComponent({
    setup() {
        const store = useLayoutStore();
        return {
          store
        }
    },
    components: {
        AddMediaSource,
        MediaSource,
        UserAction
    },
    methods: {
      handleClick(event:any) {
        event.preventDefault();
        this.store.openModal()
        console.log('Hi')
      },
      openModal(event:any) {
        event.preventDefault();
        this.store.openModal()
      },
      hideScreen(event:any) {
        event.preventDefault();
        this.store.hideScreen();
      },
      showScreen(event:any) {
        event.preventDefault();
        this.store.shareScreen();
      },
      hideWebcam(event:any) {
        event.preventDefault();
        this.store.hideWebcam();
      },
      showWebcam(event:any) {
        event.preventDefault();
        this.store.shareWebcam();
      }
    }
})

</script>
