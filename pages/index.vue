<template>
    <div>
        <Products :cart="cart"/>
        <Product @addToCart="updateCart" />
    </div>
</template>

<script setup>
    const { cart } = useCart()

    function updateCart() {
        cart.value += 1
    }
</script>

<style scoped>

</style>