import Vue from "vue";
import { VueRouter } from "vue-router";

import ProductosView from "../views/ProductosView.vue";
import LoginView from "../views/LoginView.vue";
import CarritoView from "../views/CarritoView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: ProductosView, name: "productos-view" },
  { path: "/Login", component: LoginView, name: "login-view" },
  { path: "/Carrito", component: CarritoView, name: "carrito-view" },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes,
});

export default router;
