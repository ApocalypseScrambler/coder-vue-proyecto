import validacionClase, { ValidacionMail, ValidacionPassword, ValidacionTelefono, ValidacionUsuario } from './validacionesClase'

export default {
  formulario: {
    usuario: "",
    password: "",
    nombrecompleto: "",
    mail: "",
    telefono: "",
    admin: false
  },

  submitted: false,

  usuarios: [],
 
  erroresUsuario() {
    return new ValidacionUsuario(this.formulario.usuario, this.submitted)
  },
  erroresPassword() {
    return new ValidacionPassword(this.formulario.password, this.submitted)
  },
  erroresNombre() {
    return new validacionClase(this.formulario.nombrecompleto, this.submitted)
  },
  erroresTelefono() {
    return new ValidacionTelefono(this.formulario.telefono, this.submitted)
  },
  erroresMail() {
    return new ValidacionMail(this.formulario.mail, this.submitted)
  },
  
   
  controloCampos() {
    return (
      this.erroresUsuario().usuarioSinErrores() &&
      this.erroresPassword().sinErroresPassword() &&
      this.erroresNombre().sinErrores() &&
      this.erroresTelefono().telefonoSinErrores() &&
      this.erroresMail().mailSinErrores()
      
    );
  },

  submitFormulario() {
    this.submitted = true
    if (this.controloCampos()) {
      this.usuarios.push({ ...this.formulario })
      this.resetFormulario()
    } else {
      window.scroll(0, 0)
    }
  },

  nuevoValor(campo, nuevoValor) {
    this.formulario[campo] = nuevoValor;
  },

  resetFormulario() {
    Object.keys(this.formulario).forEach((key) => (this.formulario[key] = ""));
    this.submitted = false;
  },
};
