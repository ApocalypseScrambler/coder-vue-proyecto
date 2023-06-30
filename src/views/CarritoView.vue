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
                <div v-show="productosEnCarrito.length > 0" class="botonesCarrito">
                    <button class="btn btn-primary" @click="cargarPedido()">Confirmar Compra</button>
                    <button class="btn btn-primary" @click="vaciarCarrito()">Vaciar
                        Carrito</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { cartStore } from "@/stores/cartStore";
import { userStore } from "../stores/userStore";
import { formattedDate } from "../utilService/helpers"
import ax from 'dedalo-ax'

export default {
    name: "CarritoView",
    data: () => ({
        cartStore,
        userStore
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
        async cargarPedido() {
            if (this.userStore.usuarioLogueado === 'Login') {
                alert('Debe loguearse antes de continuar')
            } else {
            const usuario = this.userStore.usuarioLogueado
            const fecha = formattedDate()
            const total = this.cartStore.carritoTotalPrecio();
            const pedidos = {
                usuario, fecha, total,
                productos: [...this.cartStore.carrito]
            }
            const mockApiUrl = import.meta.env.VITE_API_PEDIDOS
            const endpoint = "/pedidos";
            const url = mockApiUrl + endpoint;
            const res = await ax.post(url, pedidos)
            console.log(res)
            this.cartStore.pedido = []
            this.cartStore.carrito = []
            alert('Pedido realizado')
            }
        },
        vaciarCarrito() {
            this.cartStore.pedido = []
            this.cartStore.carrito = []
        }
    },
};
</script>

<style scoped>
.tabla {
    background: white;
    padding: 1rem;
    border-radius: 8px;
}
.botonesCarrito {
    display: flex;
    justify-content: space-between;
}
.carrito {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12rem;
}
</style>