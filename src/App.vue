<template>
  <div>
    <componente-nav-bar />
    <router-view />
  </div>
</template>

<script>

import ComponenteNavBar from "./components/ComponenteNavBar.vue";

export default {
  name: "App",
  components: {
      ComponenteNavBar,
  },  
};
</script>



