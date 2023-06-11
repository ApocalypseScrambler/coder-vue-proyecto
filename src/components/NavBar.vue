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
                <img src="../assets/person.svg" alt="Logo" width="40" height="30"
                        class="d-inline-block align-text-top">
                <img src="../assets/cart.svg" alt="Logo" width="40" height="30"
                    class="d-inline-block align-text-top">
            </a>
            <button @click="openUsuario">Abrir Modal</button>
            <VentanaUsuario 
                :showUsuario="showUsuario"
                @closeUsuario="closeUsuario"  
            />
        </div>
    </nav>
</template>

<script>

import VentanaUsuario from './VentanaUsuario.vue';

export default {
    components: {        
        VentanaUsuario
    },
    data: () => ({
        showUsuario: false,
        showCarrito: false
    }),

    methods: {
        openUsuario() {
            this.showUsuario = true
        },
        openCarrito() {
            this.showCarrito = true
        },
    }
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