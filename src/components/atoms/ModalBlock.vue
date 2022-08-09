<template>
    <div class="flex flex-col justify-center bg-offWhite p-4">
        <slot name="content"></slot>
    </div>
</template>
<script lang="ts">
/*
    This is a placeholder div with a slot to handle content flexibly
    No need for props when you use a <slot /> to take in HTML
    This component has no functions
*/
export default {
    setup() {},
}
</script>