<template>
  <div class="song">
    <h1>{{song.title}}</h1>
    <inline-tab tab="C" word="Word"></inline-tab>
    <button @click="test()">Test</button>
    <button @click="textReader(song.file)">Load Song</button>
    <div ref="song"></div>
    <div class="spacer"></div>
    <hr>
    <div class="spacer"></div>
    <div v-html="lyrics"></div>
    <div class="spacer"></div>
  </div>
</template>

<script>
import InlineTab from '../components/InlineTab.vue';
import Vue from 'vue';

export default {
  components: { InlineTab },
  name: "song",
  data() {
    return {
      song: {},
      split: "",
      lyrics: "",
      notes: "",
    }
  },
  created() {
    this.song = this.$root.$data.songlist.find(song => song.id === parseInt(this.$route.params.id));
    //this.textReader(this.song.file);
    // this.split = this.find(this.song.file,"***");
    // this.lyrics = this.textReader(this.song.file.substr(this.split + 3));
    // if(this.split != -1) {
    //   this.notes = this.textReader(this.song.file.substr(0,this.split));
    // }
  },
  methods: {
    test() {
      var ComponentClass = Vue.extend(InlineTab);
      var instance = new ComponentClass({
          propsData: { tab: "testTab" , word: "testWord" }
      })
      instance.$mount() // pass nothing
//         console.log(this.$refs)
      this.$refs.song.appendChild(instance.$el);
    },
    replaceAt(string, index, replacement) {
      return string.substr(0, index) + replacement + string.substr(index + 1);
    },
    textReader(string) {
      let j = 0;
      var newTag;
      for(let i = 0; i < string.length; i++) {
        if(string[i] == "{") {
          //Finish off last <p>
          j = this.makePTag(i, j, string);
          //Find value of props
          while(string[i] != '~') {
            i++;
          }
          let passedWord = string.substr(j, (i-j));
          i++;
          j=i;
          while(string[i] != '}') {
            i++;
          }
          let passedTab = string.substr(j, (i-j));
          //Create and attach instance
          var ComponentClass = Vue.extend(InlineTab);
          var instance = new ComponentClass({
              propsData: { tab: passedTab , word: passedWord }
          })
          instance.$mount() // pass nothing
//         console.log(this.$refs)
          this.$refs.song.appendChild(instance.$el);
          i++;
          j = i;
        } else if(string[i] == "&") {
          j = this.makePTag(i, j, string);
        } else if(string[i] == "@") {
          j = this.makePTag(i, j, string);
          newTag = document.createElement('div');
          newTag.classList.add("spacer");
          this.$refs.song.appendChild(newTag);
        } else if(string[i] == '*') {
          i++;
          if(string[i] == '*') {
            i++;
            if(string[i] == '*') {
              j = this.makePTag(i, j, string);
              newTag = document.createElement('hr');
              this.$refs.song.appendChild(newTag);
            }
          }
        }
      }
    },
    makePTag(i, j, string) {
      let newTag = document.createElement('p');
      newTag.innerHTML = string.substr(j, (i - j));
      console.log(newTag);
      this.$refs.song.appendChild(newTag);
      return i += 1;
    },
    find(text,token) {
      for(let i = 0; i < text.length; i++) {
        if(text[i] == token[0]) {
          for(let j = 0; j < token.length; j++) {
            if(text[i + j] != token[j]) {
              break;
            }
            if(j == token.length - 1) {
              return i;
            }
          }
        }
      }
    }
  },
}
</script>

<style>
  .spacer {
    height: .5em;
  }
</style>