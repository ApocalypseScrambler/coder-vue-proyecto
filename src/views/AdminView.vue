<template>
    <div class="admin">
        <div class="tabla" v-if="userStore.usuarioIsAdmin">
            <h1> {{ texto }} </h1>
            <form @submit.prevent="LogOut()">
                <div class="opcionesUsuario">
                    <button class="btn btn-primary"><router-link to="/AltaProducto" style="color: white;">Alta
                            Producto</router-link></button>
                    <button class="btn btn-primary"><router-link to="/EliminarProducto"
                            style="color: white;">Modificar/Eliminar
                            Producto</router-link></button>
                </div>
                <button class="btn btn-primary misPedidos"><router-link to="/Pedidos" style="color: white;">Pedidos de
                        Usuarios</router-link></button>
                <p>¿ Desea Salir ?</p>
                <div class="botones">
                    <button type="submit" class="btn btn-primary">Si</button>
                    <button class="btn btn-primary"><router-link to="/" style="color: white;">No</router-link></button>
                </div>
            </form>
        </div>
        <div v-else class="tabla">
            <p class="text-center"><strong>Debe Loguearse para acceder a esta pantalla</strong></p>
        </div>
    </div>
</template>

<script>
import { userStore } from '../stores/modules/userStore';

export default {
    name: "AdminView",
    data: () => ({
        userStore
    }),
    mounted() {
        window.scroll(0, 0)
    },
    computed: {
        texto() {
            return this.userStore.ususarioLogueado || "Mis Datos"
        }
    },
    methods: {
        LogOut() {
            this.userStore.usuarioLogueado = "Login"
            this.userStore.usuarioIsAdmin = false
            this.$router.push('/')
        }
    },
}

</script>

<style scoped>
.tabla {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: 30%;
}

.botones {
    display: flex;
    justify-content: space-around;
}

.opcionesUsuario {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.misPedidos {
    margin: 1rem 0rem 1rem 0rem;
    width: 100%;
}

h1,
p {
    text-align: center;
}

.admin {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12rem;
}
</style>