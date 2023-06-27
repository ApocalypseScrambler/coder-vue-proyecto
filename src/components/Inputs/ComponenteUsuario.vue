<template>
    <div class="contenedor">
  
      <i class="icono">
        <usuarioIcono />
      </i>
  
      <input type="text" v-model="usuario" placeholder="Usuario" />
      <span>*</span>
      
      <p v-show="error"> {{ error }}</p>
    </div>
  </template>
    
  <script>
  import usuarioIcono from '../icons/UsuarioIcono.vue'
  import formularioStore from '@/stores/formularioStore'
  
  export default {
  
    name: 'ComponenteNombre',
  
    components: {
      usuarioIcono
    },
  
    data: () => ({
      formularioStore
    }),
    computed: {
      error() {
        return (
          this.formularioStore.erroresUsuario().campoVacio() ||
          this.formularioStore.erroresUsuario().demasiadoCorto() ||
          this.formularioStore.erroresUsuario().demasiadoLargo() 
        )
      },
      usuario: {
        get() {
          return this.formularioStore.formulario.usuario
        },
        set(nuevoValor) {
          this.formularioStore.nuevoValor('usuario', nuevoValor)
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contenedor {
    position: relative;
    margin: 2rem 2rem 0.4rem;
    width: 80%;
  }
  
  input {
    border-radius: 5px;
    width: 100%;
    line-height: 1rem;
    padding: 0.5rem 1rem 0.5rem 3rem;
    outline: none;
    font-size: 1rem;
    border: 1px solid lightgrey;
  }
  
  .icono {
    position: absolute;
    z-index: 1;
    border-right: 1px solid lightgrey;
    border-radius: 5px 0 0 5px;
    padding: 0.3rem 0.5rem 0.4rem;
  }
  
  span {
    position: absolute;
    margin: 0.5rem;
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
  }
  </style>