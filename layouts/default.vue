<script setup>
    const { cart } = defineProps(['cart'])
</script>

<template>
    <header>
        <NavBar :cart="cart"/>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <Footer />
    </footer>
</template>

<style scoped>

</style>