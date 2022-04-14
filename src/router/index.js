import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coins',
    name: 'Coins',
    component: () => import('../views/CoinsView.vue')
  },
  {
    path: '/coins/:id',
    props: true,
    name: 'Coin Indicators',
    component: () => import('../views/CoinIndicators.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
