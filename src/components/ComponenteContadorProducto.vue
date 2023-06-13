<template>
  <div>
    <button @click="restar">➖️</button>
    <span>{{ contador }}</span>
    <button @click="sumar">➕️</button>
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
    contador: 1
  }),

  methods: {
    restar() {
      this.CarritoStore.restoCantidad(this.productoId);
      if (this.contador <= 1) {
        this.contador=1
      } else { this.contador--}
    },
    sumar() {
      this.CarritoStore.aumentoCantidad(this.productoId);
      this.contador++;
    },
  },
};
</script>