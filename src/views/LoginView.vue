<template>
  <div class="login">
    <div class="tabla">
      <h1> {{ texto }} </h1>
      <form class="row g-3 needs-validation" novalidate @submit.prevent="LogIn()">
        <input v-model="usuario" placeholder="Usuario">
        <input v-model="password" placeholder="Contraseña" type="password">
        <p v-if="errorMessage"> {{ errorMessage }}</p>
        <p>
          ¿Aún no estás registrado?
          <button class="btn btn-primary"><router-link :to="{ name: 'registro-view' }"
              style="color: white;">Registrarse</router-link></button>
        </p>
        <button class="btn btn-primary" type="submit">Ingresar</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import { userStore } from "../stores/modules/userStore";
import serviceUsuarios from "../utilService/serviceUsuarios";
import ax from 'dedalo-ax'

export default {
  name: "LoginView",

  data: () => ({
    userStore,
    serviceUsuarios: new serviceUsuarios(),
    usuario: "",
    password: "",
    errorMessage: ""
  }),
  mounted() {
    window.scroll(0, 0)
  },
  computed: {
    texto() {
      return this.userStore.ususarioLogueado || "Mis Datos"
    }
  },
  methods: {
    async LogIn() {
      const mockApiUrl = import.meta.env.VITE_API_URL;
      const endpoint = "/usuarios?usuario=" + this.usuario;
      const url = mockApiUrl + endpoint;

      try {
        const user = await ax.get(url);

        if (!user[0]) {
          this.errorMessage = 'Usuario no registrado.';
        } else if (user[0].password != this.password) {
          this.errorMessage = 'Contraseña incorrecta.';
        } else {
          this.userStore.usuario = user[0];
          this.userStore.usuarioLogueado = this.usuario;
          this.userStore.usuarioIsAdmin = user[0].admin;
          this.$router.push('/')
        }
      } catch (error) {
        console.error(error);
        this.errorMessage = 'Error al realizar la solicitud.';
      }
    }
  },
}


</script>

<style scoped>
.tabla {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  width: 30%;
}

h1,
p {
  text-align: center;
}

.login {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 12rem;
}
</style>