<template>
  <div>
    <componente-nav-bar />
    <div class="contenedor-cards">
      <componente-cards v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ComponenteCards from "./components/ComponenteCards.vue";
import ComponenteNavBar from "./components/ComponenteNavBar.vue";

const url = "../json/menu.json"; //'https://dav-leda.github.io/api/products'

export default {
  name: "App",
  components: {
    ComponenteCards,
    ComponenteNavBar,
  },
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
};
</script>



<style scoped>
.contenedor-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1.5rem;
  margin: 2rem 5rem;
}
</style>
