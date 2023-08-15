<template>
    <div>
        <p cart>
            Cart value: {{ cart }}
        </p>
        <button @click="add" btn>Add</button>
    </div>
</template>

<script setup>
    const { cart } = useCart()

    function add() {
        cart.value += 1
    }
</script>

<style scoped>

</style>