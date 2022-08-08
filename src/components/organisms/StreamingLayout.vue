<template>
    <div class="grid layoutColumns">
        <option-column></option-column>
        <streaming-screen></streaming-screen>
    </div>
</template>
<script>
import OptionColumn from '../molecules/OptionColumn.vue';
import StreamingScreen from '../molecules/StreamingScreen.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
    components: {
        OptionColumn,
        StreamingScreen
    }
})
</script>

<style scoped>
    .layoutColumns {
        grid-template-columns: 1fr 3fr;
    }
</style>