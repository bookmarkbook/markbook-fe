import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './registerServiceWorker'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlus, faTimes,faUserCircle,
  faAdjust, faClipboardCheck,
  faBookmark, faFolder, faFolderOpen
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTimes, faAdjust, faClipboardCheck,
  faBookmark, faFolder, faFolderOpen, faUserCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
