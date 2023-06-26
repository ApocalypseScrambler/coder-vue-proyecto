<template>
  <nav class="navbar bg-body-tertiary">

    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="../assets/coder.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Proyecto CoderHouse
        <img src="../assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Vue
      </a>

      <ul class="logos">
        <li class="btn btn-light boton"><router-link to="/"><img src="../assets/hamburguer.svg" alt="Logo" width="40" height="30"
              class="d-inline-block align-text-top">Productos</router-link></li>
        <li class="btn btn-light boton"><router-link :to="{ name: 'login-view' }"><img src="../assets/person.svg" alt="Logo" width="40" height="30"
              class="d-inline-block align-text-top" > {{ usuarioLogueado }} </router-link></li>
        <li class="btn btn-light boton"><router-link :to="{ name: 'carrito-view' }"><img src="../assets/cart.svg" alt="Logo" width="40" height="30"
              class="d-inline-block align-text-top">Carrito</router-link>
          <div class="contadorCarrito">{{ carritoCantidad }}</div>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
import router from '../router'
import { CarritoStore } from "../stores/carritoStore";
import { usuarioStore } from '../stores/usuarioStore';

export default {
  data: () => ({
    CarritoStore,
    usuarioStore
  }),
  router: router,
  computed: {
    carritoCantidad() {
      return this.CarritoStore.carritoCantidad()
    },
    usuarioLogueado() {
      return this.usuarioStore.usuarioLogueado
    }
  },
}

</script>

<style scoped>
li {
  list-style: none!important;
}

 .navbar{
    position: fixed;
}
.contadorCarrito {
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: red;
  color: white;
  text-align: center;
  left: 75px;
  top: -10px;
}

.container-fluid {
  display: flex;
  justify-content: space-between;
}

nav {
  display: inline-block;
  width: 100%;
  min-width: 20rem;
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 10;
}

.logos {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.boton {
  height: 3rem;
  border: 1px solid black;
}
</style>