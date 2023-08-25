<script setup>

</script>

<template>
    <header relative h-screen>
        <NavBar relative z-10 />
        <Hero absolute top-0 left-0 w-full h-full/>
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