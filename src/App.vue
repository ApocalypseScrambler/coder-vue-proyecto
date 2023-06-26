<script>
import router from './router'
import ComponenteNavBar from "./components/ComponenteNavBar.vue";

export default {
  name: "App",
  components: {
      ComponenteNavBar,
  },  
  router: router
};
</script>

<template>
  <div>
    <componente-nav-bar />
    <router-view />
  </div>
</template>
