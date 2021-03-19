<template>
    <div class="page">
        <div class="row" v-for="note in tabList" :key="note[0]">
            <div class="tab" v-for="tab in note" :key="tab">
                <img v-bind:src="'/uke-chords/48x64/' + tab + '.png'">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabs",
    computed: {
        tabList() {
            return this.$root.$data.chords;
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
    justify-content: space-around;
    max-width: 260px;
    margin: 0 auto;
}
</style>