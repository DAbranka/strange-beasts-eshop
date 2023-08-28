<script setup>
    const { products } = useProducts()
</script>

<template>
    <section>
        <Products :products="products"/>
    </section>
</template>

<style scoped>

</style>