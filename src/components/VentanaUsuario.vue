<template>
  <dialog v-if="showUsuario" @click="closeUsuario">

    <article>

      <header>
        <h3>Ventana Modal</h3>
        <p>Esta es una ventana modal creada con un componente de Vue.js</p>
      </header>

      <footer>
        <button @click="closeUsuario">
          Cerrar
        </button>
      </footer>

    </article>
  </dialog>
</template>
  
<script>

export default {

  name: 'VentanaUsuario',

  props: {
    showUsuario: Boolean
  },

  emits: ['close-usuario'],

  methods: {
    closeUsuario() {
      this.$emit('close-usuario')
    }
  }
}
</script>

<style scoped>
dialog {
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

article {
  position: relative;
  width: 26rem;
  height: fit-content;
  margin: auto;
  padding: 1rem;
  text-align: left;
  background-color: snow;
  border-radius: 0.3rem;
  box-shadow: 0 0.4rem 0.2rem 0 rgba(0, 0, 0, 0.5);
}

h3 {
  margin-bottom: 1rem;
}

header {
  margin: 0.5rem 1rem 2rem 1rem;
}

footer {
  position: absolute;
  top: auto;
  left: 0;
  width: 100%;
  height: 5rem;
  padding: 1.4rem;
  background-color: whitesmoke;
  border-radius: 0 0 0.3rem 0.3rem;
  border-top: 1px solid lightgrey;
}

button {
  float: right;
  background-color: navy;
  color: snow;
  border-radius: 0.3rem;
  border: none;
  opacity: 0.8;
}

button:hover {
  opacity: 1;
}
</style>