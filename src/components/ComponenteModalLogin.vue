<template>
  <b-modal id="bv-modal-login" hide-footer>
    <template #modal-title> Login </template>
    <form class="row g-3 needs-validation" novalidate>
      <b-form-input
        id="user"
        v-model="user"
        placeholder="Usuario"
      ></b-form-input>
      <b-form-input
        id="password"
        v-model="password"
        placeholder="Contraseña"
        type="password"
      ></b-form-input>
      <p>
        ¿Aún no estás registrado?
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-registro')"
          >Registrarse</b-button
        >
      </p>

      <componente-modal-registro />
      <b-button
        type="submit"
        class="mt-3"
        block
        @click="validar(user, password)"
        >Ingresar</b-button
      >
    </form>
  </b-modal>
</template>

<script>
import ComponenteModalRegistro from "./ComponenteModalRegistro.vue";
import { UsuarioStore } from "../stores/UsuarioStore";

export default {
  components: { ComponenteModalRegistro },
  name: "ComponenteModalLogin",
  data: () => ({
    UsuarioStore,
    user: "",
    password: "",
  }),

  computed: {
    buscoUsuarioLogin(user) {
      return this.UsuarioStore.findUser(user);
    },
    buscoPasswordLogin(password) {
      return this.UsuarioStore.findUser(password);
    },
    methods: {
      validar(user, password) {
        if (this.UsuarioStore.findUser(password) === password && this.UsuarioStore.findUser(user) === user) {
          alert("Bienvenido");
        }
        else {
          alert("No bienvenido");
        }
      },

      },
    }
  }

</script>