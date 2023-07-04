import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { carrito } from './modules/cartStore'
import { usuario } from './modules/userStore'

export default new Vuex.Store({
  
  modules: {
    carrito: carrito,
    usuario: usuario,
  }
})