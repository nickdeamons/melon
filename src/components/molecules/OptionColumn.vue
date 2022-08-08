<template>
  <div class="border-r-2 border-gray-300 px-3 py-8">
    <user-action 
      :buttonText="'Add Source'" 
      :action="handleClick">
    </user-action>
    <div 
      class="bg-[#F5F8FA] h-[100px] mt-5 py-3 flex-col justify-center cursor-pointer"
      role="button"
      @click="handleClick"
      @keydown.enter="handleClick"
    >
      <div class="text-4xl text-teal font-bold leading-7">+</div>
      <div class="font-bold text-md">Add Media Source</div>
      <div class="text-gray-500 text-sm">Screenshare, Camera</div>
    </div>
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
