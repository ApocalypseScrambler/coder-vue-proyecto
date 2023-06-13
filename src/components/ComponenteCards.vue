<template>
  <div class="card">
    <img :src="item.imagen" class="card-img-top" :alt="item.nombre" />
    <div class="card-body">
      <h5 class="card-title">{{ item.nombre }}</h5>
      <p class="card-text">{{ item.descripcion }}</p>
      <h5>$ {{ item.precio }}</h5>
      
      <footer>
        <componente-contador-producto :productoId="item.id" />

        <button
          @click="AgregarAlCarrito"
          :disabled="agregado"
          :class="btnColor"
        >
          {{ agregado ? "Agregado" : "Agregar al carrito" }}
        </button>
      </footer>
    </div>
  </div>
</template>



<script>
import ComponenteContadorProducto from "./ComponenteContadorProducto.vue";
import { CarritoStore } from "@/stores/CarritoStore";

export default {
  name: "ComponenteCard",
  components: { ComponenteContadorProducto },
  props: {
    item: {
      id: Number,
      nombre: String,
      descripcion: String,
      precio: Number,
      imagen: String,
    },
  },
  data: () => ({
    CarritoStore,
  }),
  computed: {
    agregado() {
      return this.CarritoStore.findById(this.item.id);
    },
    btnColor() {
      return this.agregado ? "btn-secondary" : "btn-primary";
    },
  },

  methods: {
    AgregarAlCarrito() {
        this.CarritoStore.AgregarAlCarrito(this.item);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 20rem;
}
</style>