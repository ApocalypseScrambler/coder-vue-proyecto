import axios from "axios";
const mockApiUrl = import.meta.env.VITE_API_URL;
const endpoint = "/usuarios";

const url = mockApiUrl + endpoint;
console.log(url)

export default class ServiceUsuarios {

  constructor( formulario) {
    this.formulario = formulario
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
  async guardarUsuario(formulario) {
    try {
      return (await axios.post(url, formulario)).data
    }
    catch(error) {
        console.error('Error en guardarUsuario: ' + error.message)
    }    
  }

}
