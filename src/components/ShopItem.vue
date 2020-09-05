<template>
    <div class="item">
        <img :src="product.img" :alt="product.title">
        <router-link class="link" :to="/shop/ + product.id">{{ product.title }}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true
        }
    }
}
</script>

<style lang="scss">
    .item {
        &__wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        min-width: 48%;
        text-align: center;
        .link {
            display: block;
            font-size: 22px;
        }
    }
</style>