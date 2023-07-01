<template>
  <div class="botones">
    <button class="btn btn-primary btn-sm" @click="restar" :disabled="noEnCarrito">➖️</button>
    <span>{{ cantidad || 1 }}</span>
    <button class="btn btn-primary btn-sm" @click="sumar" :disabled="noEnCarrito">➕️</button>
  </div>
</template>
  
<script>
import { cartStore } from "@/stores/cartStore";

export default {
  name: "ComponenteContadorProducto",

  props: {
    productoId: String,
  },
  data: () => ({
    cartStore,
    contador: 1,
  }),

  methods: {
    restar() {
      this.cartStore.restoCantidad(this.productoId);
    },
    sumar() {
      this.cartStore.aumentoCantidad(this.productoId);
    },
  },
  computed: {
    noEnCarrito() {
      return !this.cartStore.findById(this.productoId);
    },
    cantidad() {
      return this.cartStore.productoCantidad(this.productoId)
    },
  },
};
</script>

<style scoped>
.botones {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>