<template>
    <div class="carrito">
        <div class="tabla">
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
    </div>
</template>
  
<script>
import { cartStore } from "@/stores/cartStore";

export default {
    name: "ComponenteModalCarrito",
    data: () => ({
        cartStore
    }),

    computed: {
        productosEnCarrito() {
            return this.cartStore.carrito;
        },
        total() {
            return this.cartStore.carritoTotalPrecio();
        },
    },
    methods: {
        remove(id) {
            this.cartStore.removerDelCarrito(id);
        },
    },
};
</script>

<style scoped>
.tabla {
    background: white;
    padding: 1rem;
    border-radius: 8px;
}
.carrito {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12rem;
}
</style>