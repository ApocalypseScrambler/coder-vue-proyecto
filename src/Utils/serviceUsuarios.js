import axios from "axios";
const mockApiUrl = import.meta.env.VITE_API_URL;
const endpoint = "/usuarios";

const url = mockApiUrl + endpoint;
console.log(url)

export default class ServiceUsuarios {

  constructor(usuario, password, nombre, mail, telefono) {
    this.usuario = usuario
    this.password = password
    this.nombre = nombre
    this.mail = mail
    this.telefono = telefono
    this.url = url
  }

  /* GET */
  async obtenerUsuarios() {
    try {
      return (await axios.get(url)).data
    }
    catch(error) {
        console.error('Error en obtenerUsuarios: ' + error.message)
    }
  }

  /* POST */
  async guardarUsuario(usuario) {
    try {
      return (await axios.post(url, usuario)).data
    }
    catch(error) {
        console.error('Error en guardarUsuario: ' + error.message)
    }    
  }

}
