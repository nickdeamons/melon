<template>
  <div class="border-r-2 border-gray-300 px-3 py-8">
    <user-action 
      :buttonText="'Add Source'" 
      :action="handleClick">
    </user-action>
   <add-media-source
    :action="handleClick">
    </add-media-source>
    <media-source></media-source>
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
      }
    }
})

</script>
