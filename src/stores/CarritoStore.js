export const CarritoStore = {
  carrito: [],

  // GETTERS
  findById(id) {
    return this.carrito.find((item) => item.id === id);
  },
  productoCantidad(id) {
    const enCarrito = this.findById(id);
    return enCarrito ? enCarrito.cantidad : 0;
  },

  carritoCantidad() {
    return this.carrito.reduce((total, item) => total + item.cantidad, 0);
  },

  AgregarAlCarrito(item) {
    this.carrito.push({
      ...item,
      cantidad: 1,
      subtotal: item.precio,
    });
  },
  restoCantidad(id) {
    const enCarrito = this.findById(id);
    if (enCarrito && enCarrito.cantidad > 1) {
      enCarrito.cantidad--;
      enCarrito.subtotal = enCarrito.precio * enCarrito.cantidad;
    }
  },
  aumentoCantidad(id) {
    const enCarrito = this.findById(id);
    if (enCarrito) {
      enCarrito.cantidad++;
      enCarrito.subtotal = enCarrito.precio * enCarrito.cantidad;
    }
  },
};
