<script setup>
    const { cart } = useCart()

    function updateCart() {
        cart.value += 1
    }
</script>

<template>
    <div>
        <h1>
            Homepage
        </h1>
        <Products :cart="cart"/>
        <Product @addToCart="updateCart" />
    </div>
</template>

<style scoped>

</style>