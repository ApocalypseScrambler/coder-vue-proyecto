<template>
    <div>
    <p>Fecha: {{ pedido.fecha }}</p>
    <p>Usuario: {{ pedido.usuario }}</p>
    <p>Total del Pedido: {{ pedido.total }}</p>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(producto, i) in productos" :key="i">
                <td scope="row"> {{ producto.nombre }}</td>
                <td>{{ producto.precio }}</td>
                <td>{{ producto.cantidad }}</td>
                <td>{{ producto.subtotal }}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>

export default {
  props: {
    pedidos: Array,
  },
}

</script>