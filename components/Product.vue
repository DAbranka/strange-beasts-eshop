<template>
    <div>
        <button @click="addToCart" btn>Add</button>
    </div>
</template>

<script setup>
    const emit = defineEmits(['addToCart'])
    
    function addToCart() {
        emit('addToCart')
    }
</script>

<style scoped>

</style>