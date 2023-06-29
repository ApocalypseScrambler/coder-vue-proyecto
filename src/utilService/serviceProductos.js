import axios from "axios";
const mockApiUrl = import.meta.env.VITE_API_URL;
const endpoint = "/productos";

const url = mockApiUrl + endpoint;
console.log(url)

export default class ServiceProductos {

  constructor(producto) {
    this.producto = producto
    this.url = url
  }

  /* GET */
  async obtenerProductos() {
    try {
      return (await axios.get(url)).data
    }
    catch(error) {
        console.error('Error en obtenerProductos: ' + error.message)
    }
  }

  /* POST */
  async guardarProducto(producto) {
    try {
      return (await axios.post(url, producto)).data
    }
    catch(error) {
        console.error('Error en guardarProducto: ' + error.message)
    }    
  }

  /* PUT */
  async actualizarComida(comida, id) {
    try {
      return (await axios.put(this.url + id, comida, this.utilService.getHttpOptions())).data
    }
    catch(error) {
        console.error('Error en actualizarComida: ' + error.message)
    }    
}

  /* DELETE */
  async borrarComida(id) {
    try {
      return (await axios.delete(this.url + id)).data
    }
    catch(error) {
        console.error('Error en borrarComida: ' + error.message)
    }    
  }  
}
