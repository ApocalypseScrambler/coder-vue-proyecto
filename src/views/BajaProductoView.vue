<template>
    <div class="contenedor">
        <div class="tabla">
            <h1>Productos</h1>
            <div class="d-block text-center">
                <table class="table table-striped table-dark" v-if="this.items.length">
                    <thead class="thead-dark">
                        <tr class="d-flex">
                            <th scope="col" class="col-1">Id Producto</th>
                            <th scope="col" class="col-2">Nombre</th>
                            <th scope="col" class="col-3">Descripción</th>
                            <th scope="col" class="col-1">Precio</th>
                            <th scope="col" class="col-3">Imagen</th>
                            <th scope="col" class="col-2"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="d-flex" v-for="item in this.items" :key="item.id">
                            <td class="col-1">{{ item.id }}</td>
                            <td class="col-2">{{ item.nombre }}</td>
                            <td class="col-3">{{ item.descripcion }}</td>
                            <td class="col-1">{{ item.precio }}</td>
                            <td class="col-3"><img class="imagen" :src=item.imagen :alt=item.nombre></td>
                            <td class="col-2"><button class="btn btn-danger" @click="eliminarProducto(item.id)">Eliminar</button></td>
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
        window.scroll(0, 0)
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
    margin-top: 7rem;
}

.imagen {
    width: 7rem;
    height: 7rem;
}
</style>
