<template>
    <div class="registro">

        <form @submit.prevent="formularioStore.submitFormulario()">

            <h1>Registro</h1>

            <componente-usuario />
            <componente-password />
            <componente-nombre />
            <componente-mail />
            <componente-telefono />

            <p>* Estos campos son obligatorios.</p>
            <button class="btn btn-primary" type="submit">Enviar</button>

        </form>
    </div>
</template>
    
<script>
import ComponenteUsuario from '../components/Inputs/ComponenteUsuario.vue';
import ComponentePassword from '../components/Inputs/ComponentePassword.vue';
import ComponenteNombre from '../components/Inputs/ComponenteNombre.vue'
import ComponenteMail from '../components/Inputs/ComponenteMail.vue';
import ComponenteTelefono from '../components/Inputs/ComponenteTelefono.vue';
import formularioStore from '@/stores/formularioStore'
import serviceUsuarios from '../Utils/serviceUsuarios';

export default {
    name: 'RegistroView',
    components: {
        ComponenteNombre,
        ComponenteUsuario,
        ComponentePassword,
        ComponenteTelefono,
        ComponenteMail
    },
    data: () => ({
    formularioStore,
    serviceUsuarios: new serviceUsuarios()
  }),
  methods: {
        async guardarUsuario() {
            await this.serviceUsuarios.guardarUsuario(this.formularioStore.formulario)
        },
    },

}
</script>

<style scoped>
form {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    width: 50%;
}
p, h1 {
    text-align: center;
}
.registro {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 12rem;
}

a {
  color: white;
}
</style>