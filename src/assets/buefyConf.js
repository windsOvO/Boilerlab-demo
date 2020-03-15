import Vue from 'vue'
import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faBackward, faForward, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye, faBackward, faForward, faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  // https://github.com/FortAwesome/vue-fontawesome
  defaultIconComponent: 'font-awesome-icon'
})
