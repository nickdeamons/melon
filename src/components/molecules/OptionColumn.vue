<template>
  <div class="border-r-2 border-gray-300 px-3 py-8">
    <user-action 
      :buttonText="'Add Source'" 
      :action="handleClick">
    </user-action>
   <add-media-source
    :action="handleClick">
    </add-media-source>
  </div>
</template>

<script lang="ts">
import UserAction from "../atoms/UserAction.vue"
import { defineComponent } from "vue"
import AddMediaSource from "../atoms/AddMediaSource.vue"
import { useLayoutStore } from "../../store"

export default defineComponent({
    setup() {
        const store = useLayoutStore();
        return {
          store
        }
    },
    components: {
        UserAction,
        AddMediaSource
    },
    methods: {
      handleClick(event:any) {
        event.preventDefault();
        console.log('Hi')
      },
      openModal(event:any) {
        event.preventDefault();
        this.store.openModal()
      }
    }
})

</script>
