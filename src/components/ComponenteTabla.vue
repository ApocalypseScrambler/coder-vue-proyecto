<template>
    <div class="contenedor">
        <div class="contenido">
            <p><span>Pedido Nro:</span> {{ pedidos.id }}</p>
            <p><span>Fecha:</span> {{ pedidos.fecha }}</p>
            <p><span>Usuario:</span> {{ pedidos.usuario }}</p>
            <p><span>Total del Pedido:</span> {{ pedidos.total }}</p>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, i) in pedidos.productos" :key="i">
                        <td scope="row"> {{ producto.nombre }}</td>
                        <td>{{ producto.precio }}</td>
                        <td>{{ producto.cantidad }}</td>
                        <td>{{ producto.subtotal }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: "ComponenteTabla",
    props: {
        pedidos: Object,
    },
}

</script>

<style scoped>
.contenedor {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 2rem 0;;
}
span {
    text-decoration: underline;
    font-weight: bold;
}
.contenido {
    background: white;
    padding: 1rem;
    border-radius: 8px;
}
</style>