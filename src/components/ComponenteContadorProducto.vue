<template>
  <div>
    <button class="btn btn-primary btn-sm" @click="restar" :disabled="noEnCarrito">➖️</button>
    <span class:>{{ contador }}</span>
    <button class="btn btn-primary btn-sm" @click="sumar" :disabled="noEnCarrito">➕️</button>
  </div>
</template>
  
  <script>
import { CarritoStore } from "@/stores/CarritoStore";

export default {
  name: "ComponenteContadorProducto",

  props: {
    productoId: Number,
  },
  data: () => ({
    CarritoStore,
    contador: 1,
  }),

  methods: {
    restar() {
      this.CarritoStore.restoCantidad(this.productoId);
    },
    sumar() {
      this.CarritoStore.aumentoCantidad(this.productoId);
    },
  },
  computed: {
      noEnCarrito() {
        return !this.CarritoStore.findById(this.productoId);
      },
    },
  };
</script>