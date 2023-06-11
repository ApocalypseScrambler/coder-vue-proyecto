<template>
    <b-modal id="bv-modal-carrito" hide-footer>
      <template #modal-title>
        Using <code>$bvModal</code> Methods
      </template>
      <div class="d-block text-center">
        <h3>Carrito</h3>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-carrito')">Close Me</b-button>
    </b-modal>
  </template>
    
  <script>
  
  export default {
  
    name: 'ventanaCarrito',
  
    
  }
  </script>
  
  