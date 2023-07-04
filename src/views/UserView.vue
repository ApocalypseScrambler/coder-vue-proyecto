<template>
    <div class="user">
        <div class="tabla" v-if="userStore.usuarioLogueado != 'Login'">
            <h1>Mis Datos</h1>
            <form @submit.prevent="LogOut()">
                <button class="btn btn-primary misPedidos"><router-link to="/Pedidos" style="color: white;">Mis Pedidos</router-link></button>
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
import { userStore } from '../stores/userStore';

export default {
    name: "AdminView",
    data: () => ({
        userStore
    }),
    mounted() {
        window.scroll(0, 0)
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

.misPedidos {
    margin: 1rem 0rem 1rem 0rem;
    width: 100%;
}

h1,
p {
    text-align: center;
}

.user {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12rem;
}
</style>