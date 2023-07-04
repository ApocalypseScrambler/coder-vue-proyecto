import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ProductosView from "../views/ProductosView.vue"
import LoginView from "../views/LoginView.vue"
import AdminView from "../views/AdminView.vue"
import UserView from "../views/UserView.vue"
import RegistroView from "../views/RegistroView.vue"
import CarritoView from "../views/CarritoView.vue"
import PedidosView from "../views/PedidosView.vue"
import BajaProductoView from "../views/BajaProductoView.vue"
import AltaProductoView from "../views/AltaProductoView.vue"
import ModificarProductoView from "../views/ModificoProductoView.vue"
import Page404 from "../views/PageError404.vue"

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
      path: "/User",
      name: "user-view",
      component: UserView
    },
    {
      path: "/Admin",
      name: "admin-view",
      component: AdminView
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
    },
    {
      path: "/EliminarProducto", 
      name: "baja-producto-view",
      component: BajaProductoView
    },
    {
      path: "/AltaProducto", 
      name: "alta-producto-view",
      component: AltaProductoView
    },
    {
      path: "/ModificarProducto", 
      name: "modificar-producto-view",
      component: ModificarProductoView
    },
    {
      path: "/:pathMatch(.*)*", 
      name: "page-error404",
      component: Page404
    }
  ]
})

export default router
