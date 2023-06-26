import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ProductosView from "../views/ProductosView.vue"
import LoginView from "../views/LoginView.vue"
import CarritoView from "../views/CarritoView.vue"

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/", 
      name: "productos-view",
      component: ProductosView
    },
    {
      path: "/Login",
      name: "login-view",
      component: LoginView
    },
    {
      path: "/Carrito", 
      name: "carrito-view", 
      component: CarritoView
    }
  ]
})

export default router
