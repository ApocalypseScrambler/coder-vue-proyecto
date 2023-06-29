import axios from "axios";
const mockApiUrl = import.meta.env.VITE_API_URL;
const endpoint = "/usuarios?usuario=";

const url = mockApiUrl + endpoint;
console.log(url)

export default class ServiceUsuarios {

  constructor( formulario, usuario) {
    this.formulario = formulario
    this.usuario = usuario
    this.url = url
  }

  /* GET */
  async obtenerUsuario(usuario) {
    try {
      alert(url + usuario)
      return (await axios.get(url + usuario)).data
    }
    catch(error) {
        console.error('Error en obtenerUsuarios: ' + error.message)
    }
  }

  /* POST */
  async guardarUsuario(formulario) {
    try {
      return (await axios.post(url, formulario)).data
    }
    catch(error) {
        console.error('Error en guardarUsuario: ' + error.message)
    }    
  }

}
