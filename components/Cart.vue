<template>
    <div>
        <p font-bold text-3xl>
            Cart value: {{ cart }}
        </p>
    </div>
</template>

<script setup>

    const { cart } = useCart()
</script>

<style scoped>

</style>