<template>
  <div class="modal fade" id="ventanaCarrito" tabindex="-1" role="dialog" aria-labelledby="ventanaCarritoLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ventanaCarritoLabel">Carrito</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
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
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
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
  