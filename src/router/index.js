import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Song from '../views/Song.vue'
import Tabs from '../views/Tabs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/song/:id',
    name: 'song',
    component: Song
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: Tabs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
