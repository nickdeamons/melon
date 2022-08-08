<template>
  <div class="bg-white p-10 relative block max-w-[600px] mx-auto">
    <div class="font-bold text-xl mb-10">Add a new media source</div>
    <div class=" grid gap-3 grid-cols-2">
        
    <modal-block>
        <template v-slot:content>
            <div class="text-lg font-bold " >
                Screenshare
            </div>
            <div class="mt-3 text-gray-500">
                Share your entire screen, window or a specific Chrome tab
            </div>
        </template>
    </modal-block>
    <modal-block>
        <template v-slot:content>
            <div class="text-lg font-bold " >
                Video Feed
            </div>
            <div class="mt-3 text-gray-500">
                Share a feed of your in-built webcam and microphone. If you do not have a webcam, you can use a “virtual” webcam such as Streamlabs Desktop virtual camera
            </div>
        </template>
    </modal-block>
    </div>
  </div>
</template>

<script>
import ModalBlock from '../atoms/ModalBlock.vue'
export default {
  components: { ModalBlock },

}
</script>

<style>

</style>