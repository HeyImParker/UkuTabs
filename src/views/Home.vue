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
