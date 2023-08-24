<script setup>
const { heroStickers } = useHeroStickers() 
</script>

<template>
    <div>
        <h1>
            Products Page
        </h1>
        <StickersCarouselCards :heroStickers="heroStickers"/>
    </div>
</template>

<style scoped>

</style>