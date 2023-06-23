<template>
  <b-modal id="bv-modal-login" hide-footer>
    <template #modal-title> Login </template>
    <form class="row g-3 needs-validation" @submit.prevent="$bvModal.hide('bv-modal-login')" novalidate>
      <b-form-input id="user" v-model="user" placeholder="Usuario"></b-form-input>
      <b-form-input id="password" v-model="password" placeholder="Contraseña" type="password"></b-form-input>
      <p>
        ¿Aún no estás registrado?
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-registro')">Registrarse</b-button>
      </p>

      <componente-modal-registro />
      <b-button type="submit" class="mt-3" block @click="validar(user, password)">Ingresar</b-button>
    </form>
  </b-modal>
</template>

<script>
import ComponenteModalRegistro from "./ComponenteModalRegistro.vue";
import { usuarioStore } from "../stores/usuarioStore";
import axios from "axios";

const mockApiUrl = import.meta.env.VITE_API_USUARIOS;
const endpoint = "/users";

const url = mockApiUrl + endpoint;

export default {
  components: { ComponenteModalRegistro },
  name: "ComponenteModalLogin",

  data: () => ({
    usuarioStore,
    user: "",
    password: "",
  }),
  
  created() {
    this.getData(url)
  },

  methods: {
    async getData(url) {
    try {
      const { data } = await axios.get(url);
      this.usuarioStore.usuarios = data;
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  },
    validar(user, password) {
      if (this.usuarioStore.findPassword(password) && this.usuarioStore.findUser(user)) {
        alert("Bienvenido");        
      }
      else {
        alert("No bienvenido");
      }
    },
  },
}


</script>