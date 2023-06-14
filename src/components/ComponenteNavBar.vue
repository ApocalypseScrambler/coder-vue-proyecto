<template>
    <nav class="navbar bg-body-tertiary">
        
        <div class="container-fluid">
            <a class="navbar-brand">
                <img src="../assets/coder.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Proyecto CoderHouse
                <img src="../assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                Vue
            </a>
            <a class="navbar-brand logos">
                <b-button id="show-btn" @click="$bvModal.show('bv-modal-login')"><img src="../assets/person.svg" alt="Logo" width="40" height="30"
                    class="d-inline-block align-text-top">Login</b-button>
                    
                    <b-button id="show-btn" @click="$bvModal.show('bv-modal-carrito')"><img src="../assets/cart.svg" alt="Logo" width="40" height="30"
                    class="d-inline-block align-text-top">Carrito</b-button>
                    
                    <div class="contadorCarrito">{{ carritoCantidad }}</div>
            </a>
            <componente-modal-carrito /><componente-modal-login/>
        </div>
        
    </nav>
</template>

<script>
import { CarritoStore } from "@/stores/CarritoStore";
import ComponenteModalCarrito from './ComponenteModalCarrito.vue';
import ComponenteModalLogin from "./ComponenteModalLogin.vue";

export default {
    components: {
        ComponenteModalCarrito,
        ComponenteModalLogin
    },
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
.contadorCarrito {
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: red;
  color: white;
  text-align: center;
}
.container-fluid {
    display: flex;
    justify-content: space-between;
}

.logos {
    display: flex;
    gap: 1rem;
}
</style>