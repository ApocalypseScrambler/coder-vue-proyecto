import Vue from 'vue'
import App from './App.vue'
import router from "./routers/routerPages"

Vue.config.productionTip = false

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/main.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
