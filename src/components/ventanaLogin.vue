<template>
  <b-modal id="bv-modal-login" hide-footer>
    <template #modal-title>
      Login
    </template>
    <form class="row g-3 needs-validation" novalidate>

      <b-form-input v-model="usuario" placeholder="Usuario"></b-form-input>
      <b-form-input v-model="contraseña" placeholder="Contraseña" type="password"></b-form-input>
      <p>¿Aún no estás registrado? <b-button id="show-btn"
          @click="$bvModal.show('bv-modal-registro')">Registrarse</b-button></p>

      <ventanaRegistro />
      <b-button type="submit" class="mt-3" block @click=validar()>Ingresar</b-button>
    </form>
    <ventana-mensaje :titulo="titulo" :mensaje="mensaje" />
  </b-modal>
</template>
  
<script>
import VentanaMensaje from './ventanaMensaje.vue';

import ventanaRegistro from './ventanaRegistro.vue';

export default {

  name: 'ventanaLogin',
  components: {
    ventanaRegistro, VentanaMensaje
  },
  data() {
    return {
      usuario: '',
      contraseña: '',
      administrador: false
    }
  },
  methods: {
    validar() {
      if (this.usuario == '' || this.contraseña == '') {
        this.titulo = "Advertencia"
        this.mensaje = "Debes rellenar todos los campos"
        this.$bvModal.show('bv-modal-mensaje')
      } else {
        this.$bvModal.hide('bv-modal-login')
      }
    }
  }
}
</script>
