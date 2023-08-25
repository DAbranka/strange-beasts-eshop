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
