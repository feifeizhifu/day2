import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    component: () => import(/* webpackChunkName: "my" */ '../views/My/My.vue')
  },
  {
    path: '/space',
    name: 'space',
    component: () => import(/* webpackChunkName: "space" */ '../views/Space/Space.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
