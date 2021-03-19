import Vue from 'vue'
import App from './App.vue'
import router from './router'
import songs from './assets/songs/songs.js'
import chords from './assets/chords.js'

Vue.config.productionTip = false

let data = {
  songlist: songs,
  chords: chords
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
