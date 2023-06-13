<template>
  <div>

    <UsernameInput/>
    <PasswordInput/>

    <button @click="">INGRESAR</button>

    <p>
      ¿Aún no estás registrado? Registrate 
      <a href="" @click.prevent="">aquí.</a>
    </p>

  </div>
</template>

<script>

import UsernameInput from '@/components/user/inputs/UsernameInput.vue'
import PasswordInput from '@/components/user/inputs/PasswordInput.vue'

export default {
  data: () => ({
    users: []
  }),
  components: {
    UsernameInput,
    PasswordInput
  },
  
}
</script>