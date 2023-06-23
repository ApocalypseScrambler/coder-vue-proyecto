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
        <li class="myButton"><router-link to="/">Productos</router-link></li>
        <li class="myButton"><router-link :to="{ name: 'login-view' }"><img src="../assets/person.svg" alt="Logo" width="40" height="30"
              class="d-inline-block align-text-top">Login</router-link></li>
        <li class="myButton"><router-link :to="{ name: 'carrito-view' }"><img src="../assets/cart.svg" alt="Logo" width="40" height="30"
              class="d-inline-block align-text-top">Carrito</router-link>
          <div class="contadorCarrito">{{ carritoCantidad }}</div>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
import { CarritoStore } from "@/stores/CarritoStore";

export default {
  data: () => ({
    CarritoStore,
  }),
  computed: {
    carritoCantidad() {
      return this.CarritoStore.carritoCantidad()
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
  left: -32px;
  top: -14px;
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
}
.myButton {
	box-shadow:inset 0px 1px 3px 0px #91b8b3;
	background:linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%);
	background-color:#768d87;
	border-radius:5px;
	border:1px solid #566963;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	font-weight:bold;
	padding:11px 23px;
	text-decoration:none;
	text-shadow:0px -1px 0px #2b665e;
}
.myButton:hover {
	background:linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
	background-color:#6c7c7c;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>