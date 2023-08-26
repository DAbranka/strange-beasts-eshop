<script setup>
    const { stickers } = useStickers()
</script>

<template>
    <!-- <div h-screen flex flex-row items-center justify-center>
        <h1 text-42>
            Products Page
        </h1>
        <p font-bold>
            WIP
        </p>
    </div> -->

    <section>
        <Products :stickers="stickers"/>
    </section>
</template>

<style scoped>

</style>