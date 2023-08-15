<template>
    <div>
        <Cart :cart="cart"/>
    </div>
</template>

<script setup>
    const { cart } = defineProps(['cart'])
</script>

<style scoped>

</style>