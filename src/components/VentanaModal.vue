<template>
    <transition>
      <dialog v-if="showModal">
        <article>
          <header>
            <slot name="header"/>
          </header>
          <text>
            <slot name="text"/>
          </text>
          <footer>
            <slot name="footer"/>
          </footer>
        </article>
      </dialog>
    </transition>
  </template>
  
  <script>
  export default {
  
    name: 'ModalWindow',
  
    props: {
      showModal: Boolean
    }
  }
  </script>