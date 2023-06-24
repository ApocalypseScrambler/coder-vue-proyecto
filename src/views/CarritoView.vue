<template>
    <div>
        <h1>Carrito</h1>
        <div class="d-block text-center">
            <table class="table table-dark" v-if="productosEnCarrito.length">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in productosEnCarrito" :key="item.id">
                        <td>{{ item.nombre }}</td>
                        <td>$ {{ item.precio }}</td>
                        <td> {{ item.cantidad }}</td>
                        <td>$ {{ item.subtotal }}</td>
                        <td @click="remove(item.id)">🗑️</td>
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
</template>
  
<script>
import { CarritoStore } from "@/stores/CarritoStore";

export default {
    name: "ComponenteModalCarrito",
    data: () => ({
        CarritoStore
    }),

    computed: {
        productosEnCarrito() {
            return this.CarritoStore.carrito;
        },
        total() {
            return this.CarritoStore.carritoTotalPrecio();
        },
    },
    methods: {
        remove(id) {
            this.CarritoStore.removerDelCarrito(id);
        },
    },
};
</script>