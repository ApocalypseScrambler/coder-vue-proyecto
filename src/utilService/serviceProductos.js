import ax from "dedalo-ax";
const mockApiUrl = import.meta.env.VITE_API_URL;
const endpoint = "/productos";
let errorMessage = ""

const url = mockApiUrl + endpoint;
console.log(url);

export default class ServiceProductos {
  constructor(producto) {
    this.producto = producto;
    this.url = url;
    this.errorMessage = errorMessage
    errorMessage = ""
  }

  /* GET */
  async obtenerProductos() {
    try {
      return await ax.get(url);
    } catch (error) {
      console.error("Error en obtenerProductos: " + error.message);
      errorMessage = "Error al buscar productos."
    }
  }

    /* GET */
    async obtenerProducto(id) {
      try {
        return await ax.get(url + '/' + id);
      } catch (error) {
        console.error(error.message);
        errorMessage = 'Id de Producto no encontrada.';
      }
    }

  /* POST */
  async guardarProducto(producto) {
    try {
      return await ax.post(url, producto);
    } catch (error) {
      console.error("Error en guardarProducto: " + error.message);
      errorMessage = 'Error al guardar el producto.';
    }
  }

  /* PUT */
  async actualizarProducto(producto, id) {
    try {
      return await ax.put(this.url + "/" + id, producto);
    } catch (error) {
      console.error("Error en actualizarProducto: " + error.message);
      errorMessage = 'Error al actualizar el producto.';
    }
  }

  /* DELETE */
  async eliminarProducto(id) {
    try {
      return await ax.delete(this.url + "/" + id);
    } catch (error) {
      console.error("Error en borrarComida: " + error.message);
    }
  }
}
