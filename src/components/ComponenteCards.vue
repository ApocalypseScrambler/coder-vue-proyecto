<template>
  <div class="card">
    <img
    loading="lazy"
    :style="{ opacity }"
    @load="opacity = 1"
    :src="item.imagen"
    :alt="item.nombre"
    class="card-img-top"
    />
    <div class="card-body">
      <h5 class="card-title">{{ item.nombre }}</h5>
      <p class="card-text">{{ item.descripcion }}</p>
      <h5 class="precio">$ {{ item.precio }}</h5>
    </div>
    <footer>
      <componente-contador-producto :productoId="item.id" />

      <button @click="agregarAlCarrito" :disabled="agregado" :enabled="agregado" :class="btnColor">
        {{ agregado ? "Agregado" : "Agregar al carrito" }}
      </button>
    </footer>

  </div>
</template>



<script>
import ComponenteContadorProducto from "./ComponenteContadorProducto.vue";
import { cartStore } from "@/stores/cartStore";

export default {
  name: "ComponenteCard",
  components: { ComponenteContadorProducto },
  props: {
    item: {
      id: String,
      nombre: String,
      descripcion: String,
      precio: Number,
      imagen: String,
    },
  },
  data: () => ({
    cartStore,
    opacity: 0
  }),
  computed: {
    agregado() {
      return this.cartStore.findById(this.item.id);
    },
    btnColor() {
      return this.agregado ? "btn btn-secondary" : "btn btn-primary";
    },
  },

  methods: {
    agregarAlCarrito() {
      this.cartStore.agregarAlCarrito(this.item);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 9rem;
  width: auto;
  object-fit: cover;
  border-radius: 1rem 1rem 0 0;
  transition: opacity 1s ease;
}

.precio, .card-title, .card-title {
  text-align: center;
}
.card {
  position: relative;
  margin: 2rem 1rem;
  width: 14rem;
  height: 30rem;
  border-radius: 1rem;
}

.card-text {
  font-size: small;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-content: center;
}

footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
}
</style>