<template>
    <div class="tabla">
        <h1> {{ userStore.usuarioIsAdmin === false ? "Mis Pedidos" : "Pedidos de Usuarios" }}</h1>
        <div v-if="this.pedidos">
            <componente-tabla v-for="(pedido, i) in this.pedidos" :key="i" :pedidos="pedido" />
        </div>
    </div>
</template>

<script>
import ax from 'dedalo-ax'
import { userStore } from "../stores/modules/userStore";
import ComponenteTabla from '../components/ComponenteTabla.vue';

export default {
    name: "PedidosView",
    components: { ComponenteTabla },
    data: () => ({
        userStore,
        urlQuery: "",
        pedidos: {}
    }),
    mounted() {
        window.scroll(0, 0),
        this.Pedidos()
    },
    methods: {
        async Pedidos() {
            const mockApiUrl = import.meta.env.VITE_API_PEDIDOS;
            const endpoint = "/pedidos";

            if (this.userStore.usuarioIsAdmin === false) {
                this.urlQuery = "?usuario=" + this.userStore.usuarioLogueado
            } else {
                this.urlQuery = ""
            }
            const url = mockApiUrl + endpoint + this.urlQuery;
            console.log(this.userStore.usuarioIsAdmin)
            console.log(url)
            try {
                this.pedidos = await ax.get(url);
                console.log(this.pedidos)
            } catch (error) {
                console.error(error);
                this.errorMessage = 'Error al buscar los pedidos.';
            }
        },
    }
}
</script>

<style scoped>
h1 {
    color: white;
    text-align: center;
    margin: 2rem;
}
.tabla {
    margin-top: 12rem;
}
</style>
