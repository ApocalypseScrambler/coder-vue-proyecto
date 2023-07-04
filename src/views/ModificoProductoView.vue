<template>
    <div>
        <div class="modificarProducto"  v-if="userStore.usuarioIsAdmin">
            <h2 style="color: white;">Modificación de Producto</h2>
            <div class="formulario">

                <label for="nombre">
                    Nombre Producto:
                    <input type="text" maxlength="50" id="nombre" v-model="producto.nombre"
                        placeholder="Hamburguesa Con Queso">
                </label>

                <label for="descripcion">
                    Descripción:
                    <textarea maxlength="500" id="descripcion" v-model="producto.descripcion"
                        placeholder="Hamburguesa de pan tostado con papas y gaseosa.">
                </textarea>
                </label>

                <label for="precio">
                    Precio:
                    <input type="number" min="100" id="precio" v-model.number="producto.precio" placeholder="1500">
                </label>

                <label for="imagen">
                    URL de la imagen:
                    <input type="text" maxlength="100" id="imagen" v-model="producto.imagen"
                        placeholder="http://www.example.com/image.jpg">
                </label>

                <div class="botones">
                    <button class="btn btn-primary"><router-link :to="{ name: 'login-view' }"
                            style="color: white;">Cancelar</router-link></button>
                    <button class="btn btn-primary" @click="guardarProducto()">Guardar</button>
                </div>
            </div>
        </div>
        <div v-else class="advertencia">
            <p class="text-center"><strong>Debe Loguearse para acceder a esta pantalla</strong></p>
        </div>
    </div>
</template>
    
<script>

import serviceProductos from "../utilService/serviceProductos";
import { userStore } from '../stores/modules/userStore';

export default {
    name: "ModificoProductoView",
    data: () => ({
        producto: {
            id: 0,
            nombre: '',
            descripcion: '',
            precio: 0,
            imagen: ''
        },
        serviceProductos: new serviceProductos(),
        errorMessage: "",
        userStore
    }),

    mounted() {
        window.scroll(0, 0),
        this.buscarProducto()
    },
    methods: {
        async buscarProducto() {
            this.producto = await this.serviceProductos.obtenerProducto(userStore.productoID)
            console.log(this.producto)
            this.errorMessage = this.serviceProductos.errorMessage
            console.log(this.errorMessage)
        },
        async guardarProducto() {
            const res = await this.serviceProductos.actualizarProducto(this.producto, this.producto.id)
            console.log(res)
            alert('Producto Actualizado')
            Object.keys(this.producto).forEach((key) => (this.producto[key] = ""));
            this.errorMessage = this.serviceProductos.errorMessage
            this.$router.push('/EliminarProducto')
        }
    }
}
</script>
    
<style scoped>
h2 {
    text-align: center;
    text-decoration: underline;
}

label {
    display: block;
    margin-bottom: 1rem;
}

.advertencia {
    margin: 2rem auto;
    padding: 1rem 2rem;
    max-width: 30rem;
    font-weight: bold;
    background-color: white;
    border-radius: 1rem;
    margin-top: 7rem;
}
.botones {
    display: flex;
    justify-content: space-between;
}

input {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}

textarea {
    display: block;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    height: 5rem;
}

.modificarProducto {
    margin-top: 7rem;
}

.formulario {
    margin: 2rem auto;
    padding: 1rem 2rem;
    max-width: 30rem;
    font-weight: bold;
    background-color: white;
    border-radius: 1rem;
}
</style>