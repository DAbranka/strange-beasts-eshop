<script setup>
    const { products } = useProducts()
    // EMIT ADD TO CART
    const emit = defineEmits(['addToCart'])
    function addToCart(product) {
        emit('addToCart', product)
        console.log('Product added to cart:', product.title);
    }
</script>

<template>
    <section>
        <Products :products="products" @addToCart="addToCart($event)"/>
    </section>
</template>

<style scoped>

</style>