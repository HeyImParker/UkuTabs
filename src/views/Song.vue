<template>
  <div class="song">
    <h1>{{song.title}}</h1>
    <p>{{lyrics}}</p>
  </div>
</template>

<script>
export default {
  words: lyrics,
  created() {
    this.song = this.$root.$data.songlist.find(song => song.id === parseInt(this.$route.params.id));
    this.lyrics = textReader(song.file);
  },
  methods: {
    replaceAt(string, index, replacement) {
      return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    },
    textReader(string) {
      for(let i = 0; i < string.length; i++) {
        if(string[i] == "{") {
          string = replaceAt(string, i, "<InlineTab word=");
        } else if(string[i] == "~") {
          string = replaceAt(string, i, " tab=");
        } else if(string[i] == "}") {
          string = replaceAt(string, i, "/>");
        }
      }
      return string;
    }
  }
}
</script>
