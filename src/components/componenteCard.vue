<template>
    <div class="card">
        <img :src="postre.imgsrc" class="card-img-top" :alt="postre.title">
        <div class="card-body">
            <h5 class="card-title"> {{ postre.title }}</h5>
            <p class="card-text">{{ postre.description }}</p>
            <h5> $ {{ postre.price }}</h5>
            <a class="btn btn-primary">Go somewhere</a>
        </div>

    </div>
</template>

<script>
export default {
    name: 'componenteCard',
    props: {
        postre: {
            id: Number,
            priority: Number,
            title: String,
            price: Number,
            stock: Number,
            description: String,
            imgsrc: String,
            }
    },
}
</script>

<style scoped>
.card-img-top {
    height: 20rem;
}
</style>