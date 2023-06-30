import ax from 'dedalo-ax'
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
      return (await ax.get(url))
    }
    catch(error) {
        console.error('Error en obtenerProductos: ' + error.message)
    }
  }

  /* POST */
  async guardarProducto(producto) {
    try {
      return (await ax.post(url, producto))
    }
    catch(error) {
        console.error('Error en guardarProducto: ' + error.message)
    }    
  }

  /* PUT */
  async actualizarComida(comida, id) {
    try {
      return (await ax.put(this.url + id, comida, this.utilService.getHttpOptions())).data
    }
    catch(error) {
        console.error('Error en actualizarComida: ' + error.message)
    }    
}

  /* DELETE */
  async eliminarProducto(id) {
    try {
      return (await ax.delete(this.url + '/' + id))
    }
    catch(error) {
        console.error('Error en borrarComida: ' + error.message)
    }    
  }  
}
