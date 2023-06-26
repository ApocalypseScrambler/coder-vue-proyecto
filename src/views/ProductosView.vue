<template>
    <div class="contenedor-cards">
        <componente-cards v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>
    
  
<script>

import ComponenteCards from "../components/ComponenteCards.vue";
import serviceProductos from "../Utils/serviceProductos";

export default {
    name: "ProductosView",
    components: { ComponenteCards },
    mounted () {
        this.obtenerProductos()
    },
    data: () => ({
        items: [],
        serviceProductos: new serviceProductos()
    }),
    methods: {
        async obtenerProductos() {
        let productos = await this.serviceProductos.obtenerProductos()
        console.log(productos)
        this.items = productos
        },
    },

}
</script>

<style scoped>
.contenedor-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* max-width: 80vw; */
  margin: 9rem auto;
}
</style>