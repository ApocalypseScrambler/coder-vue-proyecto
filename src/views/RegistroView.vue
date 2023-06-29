<template>
    <div class="registro">

        <form @submit.prevent="signupUser()">

            <h1>Registro</h1>

            <componente-usuario />
            <componente-password />
            <componente-nombre />
            <componente-mail />
            <componente-telefono />

            <p>* Estos campos son obligatorios.</p>
            <p v-if="errorMessage"> {{ errorMessage }}</p>
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
import serviceUsuarios from '../utilService/serviceUsuarios';
import axios from 'axios';

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
    serviceUsuarios: new serviceUsuarios(),
    user: [],
    errorMessage: ""
  }),
  methods: {
    async signupUser() {
        this.formularioStore.submitFormulario()
        const mockApiUrl = import.meta.env.VITE_API_URL;
        let endpoint = "/usuarios?usuario=" + this.formularioStore.usuario;
        let url = mockApiUrl + endpoint;
        const response = await axios.get(url);
        this.user = response.data; 
        if (this.user[0]) {
            this.errorMessage = 'Ya existe un usuario con ese nombre.'
        } else {
        endpoint = "/usuarios";
        url = mockApiUrl + endpoint;
        console.log(this.formularioStore.usuarios)
        const res = await axios.post(url, this.formularioStore.usuarios)
        console.log(res)
        this.formularioStore.resetFormulario()}
        this.formularioStore.usuarios = []
        }
    }
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