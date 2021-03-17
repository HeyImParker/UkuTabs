<template>
  <div class="song">
    <h1>{{song.title}}</h1>
  </div>
</template>

<script>
import lyrics from "../assets/songs/HeartOfAGirl.txt";
export default {
  words: lyrics,
  created() {
    this.song = this.$root.$data.songlist.find(song => song.id === parseInt(this.$route.params.id));
  }
}
</script>
