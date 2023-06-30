<template>
    <div>
        <componente-tabla v-for="(pedido, i) in pedidos" :key="i" :pedidos="pedido" />
    </div>
</template>

<script>
import ax from 'dedalo-ax'
import { userStore } from "../stores/userStore";
import ComponenteTabla from '../components/ComponenteTabla.vue';

export default {
    name: "PedidosView",
    components: ComponenteTabla,
    data: () => ({
        userStore,
        urlQuery: "",
        pedidos: []
    }),
    mounted () {
        this.Pedidos()
    },
    methods: {
        async Pedidos() {
            const mockApiUrl = import.meta.env.VITE_API_URL;
            const endpoint = "/pedidos";

            if (this.userStore.usuarioIsAdmin === true) {
                this.urlQuery = "?usuario=" + this.userStore.usuarioLogueado
            } else {
                this.urlQuery = ""
            }
            const url = mockApiUrl + endpoint + this.urlQuery;
            try {
                this.pedidos = await ax.get(url);

            } catch (error) {
                console.error(error);
                this.errorMessage = 'Error al buscar los pedidos.';
            }
        },
    }
}
</script>


