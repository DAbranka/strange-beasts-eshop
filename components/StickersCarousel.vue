<script setup>
const { heroStickers } = useHeroStickers()
</script>

<template>
    <div>
        <div flex flex-row>
            <StickersCarouselCards :heroStickers="heroStickers"/>
        </div>
    </div>
</template>

<style scoped>

    /* .stickers:hover .stickers-slide{
        animation-play-state: paused;
    } */
</style>