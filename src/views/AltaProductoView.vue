<template>
    <div class="altaProducto">
        <div class="formulario" v-if="userStore.usuarioIsAdmin">
            <h2>Alta de Nuevo Producto</h2>
            <label for="nombre">
                Nombre Producto:
                <input type="text" maxlength="50" id="nombre" v-model="producto.nombre" placeholder="Hamburguesa Con Queso">
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
                <button class="btn btn-primary" @click="agregarProducto()">Agregar</button>
            </div>
        </div>
        <div v-else class="formulario">
            <p class="text-center"><strong>Debe Loguearse para acceder a esta pantalla</strong></p>
        </div>
    </div>
</template>
    
<script>

import { userStore } from '../stores/modules/userStore';
import serviceProductos from "../utilService/serviceProductos";


export default {
    name: "AltaProductoView",
    data: () => ({
        producto: {
            nombre: '',
            descripcion: '',
            precio: 0,
            imagen: ''
        },
        serviceProductos: new serviceProductos(),
        userStore
    }),
    mounted() {
        window.scroll(0, 0)
    },

    methods: {
        async agregarProducto() {
            try {
                const res = await this.serviceProductos.guardarProducto(this.producto)
                console.log(res)
                alert('Nuevo Producto Grabado')
                Object.keys(this.producto).forEach((key) => (this.producto[key] = ""));
                window.scroll(0, 0)
            }
            catch (error) {
                console.error(error);
                this.errorMessage = 'Error al realizar la solicitud.';
            }
        }
    }
}
</script>
    
<style scoped>
label {
    display: block;
    margin-bottom: 1rem;
}

.botones {
    display: flex;
    justify-content: space-between;
}

h2 {
    text-align: center;
    text-decoration: underline;
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

.formulario {
    margin: 2rem auto;
    padding: 1rem 2rem;
    max-width: 30rem;
    font-weight: bold;
    background-color: white;
    border-radius: 1rem;
    margin-top: 7rem;
}
</style>