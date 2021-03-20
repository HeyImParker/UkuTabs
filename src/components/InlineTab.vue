<template>
    <div style="display:inline-block;">
        <img v-bind:src="'/uke-chords/48x64/' + tab + '.png'">
    </div>
</template>

<script>
export default {
    name: 'InlineTab',
    props: {
        tab: String
    },
}
</script>

<style scoped>
    /* .box {
        height: 1em;
    } */
</style>