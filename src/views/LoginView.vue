<template>
  <div class="login">
    <div class="tabla">
      <h1> {{ userStore.usuarioLogueado === 'Login' ? "Login" : "Mis Datos" }} </h1>
      <form v-if="userStore.usuarioLogueado === 'Login'" class="row g-3 needs-validation" novalidate>
        <input v-model="usuario" placeholder="Usuario">
        <input v-model="password" placeholder="Contraseña" type="password">
        <p>
          ¿Aún no estás registrado?
          <button class="btn btn-primary"><router-link :to="{ name: 'registro-view' }" style="color: white;">Registrarse</router-link></button>
        </p>

        <button class="btn btn-primary" type="submit" @click="validar()">Ingresar</button>
      </form>
      <form v-else>
        <div class="opcionesUsuario" v-if="userStore.usuarioIsAdmin = true">          
          <button class="btn btn-primary">Alta Producto</button>
          <button class="btn btn-primary">Modificar Producto</button>
          <button class="btn btn-primary">Eliminar Producto</button>
        </div>
        <button class="btn btn-primary misPedidos">Mis Pedidos</button>
        <p>¿ Desea Salir ?</p>
        <div class="botones">
          <button class="btn btn-primary" @click="LogOut()">Si</button>
          <button class="btn btn-primary" ><router-link to="/" style="color: white;">No</router-link></button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import { userStore } from "../stores/userStore";
import serviceUsuarios from "../Utils/serviceUsuarios";

export default {
  name: "LoginView",

  data: () => ({
    userStore,
    serviceUsuarios: new serviceUsuarios(),
    usuario: "",
    password: ""
  }),

  mounted() {
    this.obtenerUsuarios()
  },
  methods: {
    async obtenerUsuarios() {
      let usuarios = await this.serviceUsuarios.obtenerUsuarios()
      this.userStore.usuarios = usuarios
      console.log(this.userStore.usuarios)
    },

    validar() {
      if (this.userStore.findPassword(this.password) && this.userStore.findUser(this.usuario)) {
        alert("Bienvenido");
        this.userStore.usuarioLogueado = this.usuario
        this.userStore.usuarioIsAdmin = this.userStore.findAdmin(this.usuario)
        console.log(this.userStore.usuarioIsAdmin)
        this.$router.push('/')
      }
      else {
        alert("No bienvenido");
      }
    },
    LogOut() {
      this.userStore.usuarioLogueado = "Login"
      this.userStore.usuarioIsAdmin = false
      this.$router.push('/')
    }
  },
}


</script>

<style scoped>
a {
  color: black;
}
.tabla {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  width: 30%;
}

.botones {
  display: flex;
  justify-content: space-around;
}

.opcionesUsuario {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.misPedidos {
  margin: 1rem 0rem 1rem 0rem;
  width: 100%;
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