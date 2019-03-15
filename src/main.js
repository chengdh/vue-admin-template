import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faUserCircle,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

/**
 * This project originally used easy-mock to simulate data,
 * but its official service is very unstable,
 * and you can build your own service if you need it.
 * So here I use Mock.js for local emulation,
 * it will intercept your request, so you won't see the request in the network.
 * If you remove `../mock` it will automatically request easy-mock data.
 */
import '../mock' // simulation data
import FormBuilder from 'element-form-builder'

import VueSlideoutPanel from 'vue2-slideout-panel'

// Vue.use(ElementUI, { locale })
Vue.use(ElementUI)

Vue.use(FormBuilder)

Vue.use(VueSlideoutPanel)

library.add(faCoffee, faUserCircle, faShieldAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
