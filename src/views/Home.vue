<template>
  <div class="home">
    <router-link class="list" v-for="song in songs" :key="song.id" :to="'/song/' + song.id" >
      <p>{{song.title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    songs() {
      return this.$root.$data.songlist;
    }
  }
}
</script>

<style scoped>
  .list p {
    background-color: rgb(31, 155, 238);
    padding: 1em;
    margin: .1em auto;
    max-width: 300px;
    color: white;
  }
  
  a {
    text-decoration: none;
  }
</style>