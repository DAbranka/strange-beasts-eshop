<script setup>
    const { product } = defineProps(['product'])
</script>

<template>
    <div flex flex-col items-center m-9>
        <!-- Product image -->
        <nuxt-link :to="`/products/${product.id}`">
            <div productCard mb-6>
                <img w-64 :src="product.image" :alt="product.title">
            </div>
        </nuxt-link>
        <article mb-3>
            <h2 text-3xl mb-3>{{ product.title }}</h2>
        </article>
        
        <!-- Add to cart -->
        <section>
            <button addCartBtn> Buy for €{{product.price}}</button>
        </section>
    </div>
</template>

<style lang="scss" scoped>

</style>