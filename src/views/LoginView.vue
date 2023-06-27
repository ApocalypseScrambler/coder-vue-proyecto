<template>
  <div class="login">
    <div class="tabla">
      <h1> Login </h1>
      <form class="row g-3 needs-validation" novalidate>
        <input id="user" v-model="usuario" placeholder="Usuario">
        <input id="password" v-model="password" placeholder="Contraseña" type="password">
        <p>
          ¿Aún no estás registrado?
          <button class="btn btn-primary"><router-link :to="{ name: 'registro-view' }">Registrarse</router-link></button>
        </p>

        <button class="btn btn-primary" type="submit" @click="validar(user, password)">Ingresar</button>
      </form>
    </div>
  </div>
</template>
  
<script>
import { usuarioStore } from "../stores/usuarioStore";
import serviceUsuarios from "../Utils/serviceUsuarios";

export default {
  name: "LoginView",

  data: () => ({
    usuarioStore,
    usuario: "",
    password: "",
    serviceUsuarios: new serviceUsuarios()
  }),

  mounted () {
        this.obtenerUsuarios()
    },
    methods: {
        async obtenerUsuarios() {
        let usuarios = await this.serviceUsuarios.obtenerUsuarios()
        this.usuarioStore.usuarios = usuarios
        console.log(this.usuarioStore.usuarios)
        },
    },
    validar(usuario, password) {
      
      if (this.usuarioStore.findPassword(password) && this.usuarioStore.findUser(usuario)) {
        console.log(password + ' ' + usuario)
        alert("Bienvenido");
        this.usuarioStore.usuarioLogueado = usuario
      }
      else {
        alert("No bienvenido");
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
h1 {
  text-align: center;
}
.login {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12rem;
}

a {
  color: white;
}
</style>