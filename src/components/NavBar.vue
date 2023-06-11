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
                
            </a>
            <ventanaLogin/><ventanaCarrito/>
        </div>
    </nav>
</template>

<script>

import ventanaCarrito from './ventanaCarrito.vue';
import ventanaLogin from './ventanaLogin.vue';

export default {
    components: {        
        ventanaLogin, ventanaCarrito
    },
    
}

</script>

<style scoped>
.container-fluid {
    display: flex;
    justify-content: space-between;
}

.logos {
    display: flex;
    gap: 1rem;
}
</style>