<template>
    <b-modal id="bv-modal-mensaje" hide-footer>
        <template #modal-title>
            {{ titulo }}
        </template>
        <p> {{ mensaje }}</p>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-mensaje')">Aceptar</b-button>

    </b-modal>
</template>
    
<script>

export default {

    name: 'VentanaMensaje',
    props: {
        titulo: String,
        mensaje: String
    }
}
</script>