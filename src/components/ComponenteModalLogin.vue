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

      <componente-modal-registro />
      <b-button type="submit" class="mt-3" block @click=validar()>Ingresar</b-button>
    </form>
  </b-modal>
</template>

<script>
import ComponenteModalRegistro from './ComponenteModalRegistro.vue'

export default {
  components: { ComponenteModalRegistro },
  name: "ComponenteModalLogin",
  data: () => ({
    users: []
  }),
  
}
</script>