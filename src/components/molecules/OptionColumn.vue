<template>
  <div class="border-r-2 border-gray-300 mt-8 px-3">
    <user-action 
        :buttonText="'Add Source'" 
        :action="handleClick">
      </user-action>
    <media-source v-if="store.screenShare" :mediaType="'screenshare'">
      <template v-slot:image>
        <img src="/img/screenshare-image.png" class="block w-full" />
      </template>
      <template v-slot:sourceName>
        My Screenshare Feed
      </template>
    </media-source>
    <media-source v-if="store.webcamFeed" :mediaType="'webcam'">
      <template v-slot:image>
        <img src="/img/webcam-image.png" class="block w-full" />
      </template>
      <template v-slot:sourceName>
        My Video Feed
      </template>
    </media-source>
    <div class="mt-4">
      
    <add-media-source
      v-if="!(store.screenShare && store.webcamFeed)"
      :action="handleClick">
      </add-media-source>
    </div>
  </div>
</template>

<script lang="ts">
/* This component handles the options of media sources for a user to add to the live stream view */
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
      /* All functions pass the event object to note their action type */
      handleClick(event:any) {
        event.preventDefault();
        this.store.openModal()
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
