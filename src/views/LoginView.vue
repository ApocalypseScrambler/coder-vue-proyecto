<template>
    <div>
      <h1> Login </h1>
      <form class="row g-3 needs-validation" novalidate>
        <input type="text">
        <input id="user" v-model="usuario" placeholder="Usuario">
        <input id="password" v-model="password" placeholder="Contraseña" type="password">
        <p>
          ¿Aún no estás registrado?
          <button><router-link :to="{name: 'registrarse-view'}">Registrarse</router-link></button>
        </p>
  
        <button type="submit" class="mt-3" block @click="validar(user, password)">Ingresar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { usuarioStore } from "../stores/usuarioStore";
  import axios from "axios";
  
  const mockApiUrl = import.meta.env.VITE_API_URL;
  const endpoint = "/users";
  
  const url = mockApiUrl + endpoint;
  
  export default {
    name: "LoginView",
  
    data: () => ({
        usuarioStore,
        usuario: "",
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
      validar(usuario, password) {
        
        if (this.usuarioStore.findPassword(password) && this.usuarioStore.findUser(usuario)) {
          alert("Bienvenido");
        }
        else {
          alert("No bienvenido");
        }
      },
    },
  }
  
  
  </script>