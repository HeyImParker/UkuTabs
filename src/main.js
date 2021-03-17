import Vue from 'vue'
import App from './App.vue'
import router from './router'
import songs from './assets/songs/songs.js'

Vue.config.productionTip = false

let data = {
  songlist: songs
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
