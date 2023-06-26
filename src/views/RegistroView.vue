<template>
    <form @submit.prevent="formularioStore.submitFormulario()">

        <h1>Formulario</h1>

        <componente-usuario />
        <componente-password />
        <componente-nombre />
        <componente-mail />
        <componente-documento />
        
        <p>* Estos campos son obligatorios.</p>
        <button type="submit">Enviar</button>

    </form>
</template>
    
<script>
import ComponenteNombre from '../components/inputs/ComponenteNombre.vue';

export default {
    name: 'RegistroView',
    components: {
        ComponenteNombre,
    }

}
</script>