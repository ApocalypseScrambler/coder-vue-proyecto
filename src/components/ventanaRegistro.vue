<template>
    <b-modal id="bv-modal-registro" hide-footer>
        <template #modal-title>
            Login
        </template>
        <div class="d-flex text-center flex-column  gap-2">
            <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre"
                aria-describedby="basic-addon1">
            <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido"
                aria-describedby="basic-addon1">
            <input type="text" class="form-control" placeholder="Usuario" aria-label="Usuario"
                aria-describedby="basic-addon1">
            <input type="mail" class="form-control" placeholder="Mail" aria-label="Mail" aria-describedby="basic-addon1">
            <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
                aria-describedby="basic-addon1">
        </div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-registro')">Confirmar</b-button>

    </b-modal>
</template>
    
<script>

export default {

    name: 'VentanaRegistro',


}
</script>
  