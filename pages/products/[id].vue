<script setup>
    const { id } = useRoute().params
    const { products } = useProducts()
</script>

<template>
    <div>
        <section>
            <p>
                {{ id }}
            </p>
        </section>
    </div>
</template>

<style scoped>

</style>