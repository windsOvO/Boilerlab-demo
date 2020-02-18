import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Navbar from './components/Navbar'
import NavbarItem from './components/NavbarItem'
import NavbarDropdown from './components/NavbarDropdown'
import LoginBtn from './components/LoginBtn'

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.component('b-login-btn', LoginBtn)

new Vue({
  router,
  store,
  render: h => h(App),
  components: {
    'b-navbar': Navbar,
    'b-navbar-item': NavbarItem,
    'b-navbar-dropdown': NavbarDropdown
    // 'b-login-btn': LoginBtn
  }
}).$mount('#app')
