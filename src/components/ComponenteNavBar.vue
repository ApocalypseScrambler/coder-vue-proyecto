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
        <li class="btn btn-light boton"><router-link to="/">
            <i>
              <HamburguesaIcono />
            </i>
            Productos</router-link></li>
        <li v-show="userStore.usuarioLogueado === 'Login'" class="btn btn-light boton"><router-link
            :to="{ name: 'login-view' }">
            <i class="icono">
              <PersonaIcono />
            </i>
            Login</router-link>
        </li>
        <li v-show="userStore.usuarioIsAdmin && userStore.usuarioLogueado != 'Login'" class="btn btn-light boton">
          <router-link :to="{ name: 'admin-view' }">
            <i class="icono">
              <PersonaIcono />
            </i>
            {{ userStore.usuarioLogueado }} </router-link>
          <p>Administrador</p>
        </li>
        <li v-show="!userStore.usuarioIsAdmin && userStore.usuarioLogueado != 'Login'" class="btn btn-light boton">
          <router-link :to="{ name: 'user-view' }">
            <i class="icono">
              <PersonaIcono />
            </i>
            {{ userStore.usuarioLogueado }} </router-link>
        </li>
        <li class="btn btn-light boton">
          <router-link :to="{ name: 'carrito-view' }">
            <i>
              <CarritoIcono />
            </i>
            Carrito</router-link>
          <div class="contadorCarrito">{{ carritoCantidad }}</div>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
import router from '../router'
import { cartStore } from "../stores/modules/cartStore";
import { userStore } from '../stores/modules/userStore';
import CarritoIcono from '../components/icons/CarritoIcono.vue';
import HamburguesaIcono from '../components/icons/HamburguesaIcono.vue';
import PersonaIcono from '../components/icons/PersonaIcono.vue';

export default {
  name: "ComponenteNavBar",
  components: { CarritoIcono, HamburguesaIcono, PersonaIcono },
  data: () => ({
    cartStore,
    userStore
  }),
  router: router,
  computed: {
    carritoCantidad() {
      return this.cartStore.carritoCantidad()
    },

  },
}

</script>

<style scoped>
li {
  list-style: none !important;
}

p {
  color: red;
  font-size: small;
  top: -7px;
}

a {
  font-weight: 700;
}

.navbar {
  position: fixed;
}

.icono {
  width: 40px;
  height: 30px;
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
}</style>