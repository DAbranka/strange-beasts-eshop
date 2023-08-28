<script setup>
const { stickers } = useStickers()
</script>

<template>
    <div>
        <div flex flex-row>
            <StickersCarouselCards :stickers="stickers"/>
        </div>
    </div>
</template>
