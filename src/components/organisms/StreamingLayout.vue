<template>
<div>
    <div class="grid layoutColumns max-w-[1500px]">
        <option-column></option-column>
        <streaming-screen></streaming-screen>
        <user-action-row></user-action-row>
    </div>
    <modal-content></modal-content>
    </div>
</template>
<script>
import OptionColumn from '../molecules/OptionColumn.vue';
import StreamingScreen from '../molecules/StreamingScreen.vue';
import UserActionRow from '../molecules/UserActionRow.vue';
import ModalContent from '../molecules/ModalContent.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    components: {
        ModalContent,
        OptionColumn,
        StreamingScreen,
        UserActionRow
    }
})
</script>

<style scoped>
    .layoutColumns {
        grid-template-columns: 200px 3fr;
    }
</style>