<template>
    <div class="fixed bottom-0 w-full left-0">
        <div class="grid gap-2 grid-cols-3 px-3 py-[9px] border-2 border-gray-300 bg-white w-[500px] mx-auto">
            <user-action :buttonText="'Chat'" :action="placeholder" class=""></user-action>
            <user-action :buttonText="'Record'" :action="placeholder"></user-action>
            <user-action :buttonText="'Go Live'" :action="placeholder"></user-action>
        </div>
    </div>
</template>
<script lang="ts">
import UserAction from '../atoms/UserAction.vue'
const placeholder = (event:any) => {
    console.log('Hi!', event);
}
export default {
  components: { UserAction },
    setup() {
        
    },
    methods: {
        placeholder
    }
}
</script>