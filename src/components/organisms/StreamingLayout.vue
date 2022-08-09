<template>
<div class="relative max-w-[1500px] mx-auto">
    <div class="grid layoutColumns ">
        <option-column></option-column>
        <streaming-screen></streaming-screen>
    </div>
    <user-action-row></user-action-row>
    <vue-final-modal 
        v-model="store.modalOpen"
        :overlay-style="{backgroundColor :'rgba(255, 255, 255, 0.4)'}"
         @closed="() => {
            store.closeModal()
         }"
         classes="flex justify-center items-center"> 
        <modal-content></modal-content>
    </vue-final-modal>
    </div>
</template>
<script>
import OptionColumn from '../molecules/OptionColumn.vue';
import StreamingScreen from '../molecules/StreamingScreen.vue';
import UserActionRow from '../molecules/UserActionRow.vue';
import ModalContent from '../molecules/ModalContent.vue';
import { defineComponent } from 'vue'
import { useLayoutStore } from '../../store';

export default defineComponent({
    components: {
        ModalContent,
        OptionColumn,
        StreamingScreen,
        UserActionRow
    },
    setup() {
        const store = useLayoutStore();
        return {
            store
        }
    }
})
</script>

<style scoped>
    .layoutColumns {
        grid-template-columns: 200px 3fr;
    }
</style>