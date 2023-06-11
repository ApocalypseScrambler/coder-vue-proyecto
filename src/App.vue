<template>
  <div>
    <nav-bar />
    <div class="contenedor-cards">
      <componente-card v-for="postre in postres" :key="postre.id" :postre="postre" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import componenteCard from './components/componenteCard.vue';
import NavBar from './components/NavBar.vue';

const url = 'https://dav-leda.github.io/api/products'

export default {
  name: 'App',
  components: {
    componenteCard, NavBar
  },
  data: () => ({
    postres: []
  }),
  created() {
    this.getData(url)
  },
  methods: {
    async getData(url) {
      try {
        const { data } = await axios.get(url)
        this.postres = data
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>



<style scoped>
.contenedor-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 1.5rem;
  margin: 1rem;
}
</style>
