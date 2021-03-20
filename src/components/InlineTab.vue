<template>
    <div style="display:inline-block;">
        <div class="root">
            <div v-on:click="chordCheck()" class="box">
                <p>{{tab}}</p>
                <div v-if="show" class="chord">
                    <img v-bind:src="'/uke-chords/48x64/' + tab + '.png'">
                    <!-- <img v-bind:src={{chordImg}}> -->
                </div>
                <p v-else>{{word}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InlineTab',
    data() {
        return {
            show: false
        }
    },
    props: {
        word: {
            type: String,
            default: 'A'
        },
        tab: {
            type: String,
            default: 'A'
        }
        
    },
    methods: {
        chordCheck() {
            if(this.show) {
                this.show = false;
            } else {
                this.show = true;
            }
        }
    },
    computed: {
        chordImg() {
            return "@/../assets/uke-chords/48x64/" + this.tab + ".png";
        }
    }
}
</script>

<style scoped>
    .box {
        height: 2em;
    }
</style>