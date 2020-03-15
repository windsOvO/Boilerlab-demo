import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from '../firebase'
// import Store from '../store/index'

import LogoutBtn from '../components/navbar/LogoutBtn'
import Btns from '../components/navbar/Btns'
import Welcome from '../views/Welcome'
import MainView from '../views/MainView'
import Details from '../views/Details'
import LabSelection from '../components/details/LabSelection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      main: Welcome,
      btn: Btns
    }
  },
  {
    path: '/home',
    components: {
      main: MainView,
      btn: LogoutBtn
    }
  },
  {
    path: '/details',
    components: {
      main: Details,
      dropdown: LabSelection
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // if (from.path === '/details') {
  //   Store.commit('resetLab')
  //   // update progress in database
  //   const db = firebase.firestore()
  //   db.collection('students').doc(from.query.name)
  //     .update({
  //       progress: this.studentProgress
  //     }).then(() => {
  //       console.log('Document successfully updated!')
  //     })
  // }
  next()
})

export default router
