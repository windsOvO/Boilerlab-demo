import Vue from 'vue'
import VueRouter from 'vue-router'

import LogoutBtn from '../components/navbar/LogoutBtn'
import StartBtns from '../components/navbar/StartBtns'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: StartBtns
  },
  {
    path: '/login',
    component: LogoutBtn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
