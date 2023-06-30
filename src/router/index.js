import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ProductosView from "../views/ProductosView.vue"
import LoginView from "../views/LoginView.vue"
import RegistroView from "../views/RegistroView.vue"
import CarritoView from "../views/CarritoView.vue"
import PedidosView from "../views/PedidosView.vue"

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
      path: "/Registro",
      name: "registro-view",
      component: RegistroView
    },
    {
      path: "/Carrito", 
      name: "carrito-view", 
      component: CarritoView
    },
    {
      path: "/Pedidos",
      name: "pedidos-view",
      component: PedidosView
    }
  ]
})

export default router
