<template>
    <div class="contenedor">

        <i class="icono">
            <mailIcono />
        </i>

        <input type="mail" v-model="mail" placeholder="mail@mail.com" />
        <span>*</span>

        <p v-show="error"> {{ error }}</p>

    </div>
</template>
    
<script>
import mailIcono from '../icons/MailIcono.vue'
import formularioStore from '@/stores/formularioStore'

export default {

    name: 'ComponenteMail',

    components: {
        mailIcono
    },

    data: () => ({
        formularioStore
    }),
    computed: {
        error() {
            return (
                this.formularioStore.erroresMail().campoVacio() ||
                this.formularioStore.erroresMail().mailInvalido()
            )
        },
        mail: {
            get() {
                return this.formularioStore.formulario.mail
            },
            set(nuevoValor) {
                this.formularioStore.nuevoValor('mail', nuevoValor)
            }
        }
    }
}
</script>
  
<style scoped>
p {
    color: red;
}
.contenedor {
    position: relative;
    margin: 2rem 2rem 0.4rem;
    width: 85%;
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