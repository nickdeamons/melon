<template>
  <div class="border-r-2 border-gray-300">
    <user-action 
      :buttonText="'Add Source'" 
      :action="handleClick">
    </user-action>
  </div>
</template>

<script lang="ts">
import UserAction from "../atoms/UserAction.vue"
import { defineComponent } from "vue"

const handleClick = (event:any) => {
  console.log(event)
}

export default defineComponent({
    setup() {
        
    },
    components: {
        UserAction
    },
    methods: {
      handleClick
    }
})

</script>
