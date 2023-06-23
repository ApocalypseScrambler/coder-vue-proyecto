<template>
    <div class="contenedor-cards">
        <componente-cards v-for="item in items" :key="item.id" :item="item" />
    </div>
</template>
    
  
<script>
import axios from "axios";
import ComponenteCards from "../components/ComponenteCards.vue";

const mockApiUrl = import.meta.env.VITE_API_URL;
const endpoint = "/productos";

const url = mockApiUrl + endpoint;

export default {
    name: "ComponenteCards",
    components: { ComponenteCards },
    data: () => ({
        items: [],
    }),
    created() {
        this.getData(url);
    },
    methods: {
        async getData(url) {
            try {
                const { data } = await axios.get(url);
                this.items = data;
            } catch (error) {
                console.log(error);
            }
        },
    },

}
</script>

<style scoped>
.contenedor-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* max-width: 80vw; */
  margin: 9rem auto;
}
</style>