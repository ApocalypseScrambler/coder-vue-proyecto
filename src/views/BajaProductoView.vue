<template>
    <div class="contenedor">
        <div class="tabla">
            <h1>Productos</h1>
            <div class="d-block text-center">
                <table class="table table-striped table-dark" v-if="this.items.length">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id Producto</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Imagen</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="item in this.items" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.nombre }}</td>
                            <td>{{ item.descripcion }}</td>
                            <td>{{ item.precio }}</td>
                            <td>{{ item.imagen }}</td>
                            <td @click="eliminarProducto(item.id)">🗑️</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import serviceProductos from "../utilService/serviceProductos";

export default {
    name: "BajaProductoView",
    mounted() {
        this.obtenerProductos()
    },
    data: () => ({
        items: [],
        serviceProductos: new serviceProductos()
    }),
    methods: {
        async obtenerProductos() {
            let productos = await this.serviceProductos.obtenerProductos()
            console.log(productos)
            this.items = productos
        },
        async eliminarProducto(id) {
            if (confirm("Esta seguro de borrar el producto?")) {
                let productos = await this.serviceProductos.eliminarProducto(id)
                console.log(productos)
                this.obtenerProductos()
            }
        },
    },

}
</script>

<style scoped>
.tabla {
    background: white;
    padding: 0rem 2rem;
    margin: 2rem;
    border-radius: 1rem;
}
.contenedor {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;
}
</style>
