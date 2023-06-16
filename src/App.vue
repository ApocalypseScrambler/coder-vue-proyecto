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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* max-width: 80vw; */
  margin: 9rem auto;
}
</style>
