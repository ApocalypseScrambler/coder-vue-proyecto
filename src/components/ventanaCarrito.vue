<template>
  <b-modal id="bv-modal-carrito" hide-footer>
    <div>
      <table v-if="items.length">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.nombre }}</td>
            <td>$ {{ item.precio }}</td>
            <td>
              <ComponenteContadorProducto :productId="product.id" />
            </td>
            <td>$ {{ product.subtotal }}</td>
            <td @click="remove(product.id)">🗑️</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>Total:</td>
            <td></td>
            <td></td>
            <td>$ {{ total }}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

      <p v-else>Aún no has agregado productos en el carrito.</p>
    </div>
  </b-modal>
</template>

<script>
import { carritoStore } from "@/stores/CarritoStore";
import ComponenteContadorProducto from "@/components/ComponenteContadorProducto.vue";

export default {
  name: "VentanaCarrito",

  components: {
    ComponenteContadorProducto,
  },

  data: () => ({
    carritoStore,
  }),

  computed: {
    products() {
      return this.carritoStore.cart;
    },
    total() {
      return this.carritoStore.carritoTotalPrecio();
    },
  },

  methods: {
    remove(id) {
      this.carritoStore.removerDeCarrito(id);
    },
  },
};
</script>
  