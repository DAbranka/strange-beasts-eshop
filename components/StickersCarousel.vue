<script setup>
    const { heroStickers } = useHeroStickers() 
</script>

<template>
    <div>
        <div flex flex-row>
            <!-- <div class="stickersFirstCol">
                <div class="stickers-slide">
                    <img src="@/assets/stickers/BW.png" alt="sticker/png">
                    <img src="@/assets/stickers/image25.png" alt="sticker/png">
                    <img src="@/assets/stickers/image26.png" alt="sticker/png">
                    <img src="@/assets/stickers/image29.png" alt="sticker/png">
                    <img src="@/assets/stickers/image27.png" alt="sticker/png">
                </div>
                <div class="stickers-slide">
                    <img src="@/assets/stickers/BW.png" alt="sticker/png">
                    <img src="@/assets/stickers/image25.png" alt="sticker/png">
                    <img src="@/assets/stickers/image26.png" alt="sticker/png">
                    <img src="@/assets/stickers/image29.png" alt="sticker/png">
                    <img src="@/assets/stickers/image27.png" alt="sticker/png">
                </div>
            </div>
            <div class="stickersSecondCol">
                <div class="stickers-slide">
                    <img src="@/assets/stickers/BW.png" alt="sticker/png">
                    <img src="@/assets/stickers/image25.png" alt="sticker/png">
                    <img src="@/assets/stickers/image26.png" alt="sticker/png">
                    <img src="@/assets/stickers/image29.png" alt="sticker/png">
                    <img src="@/assets/stickers/image27.png" alt="sticker/png">
                </div>
                <div class="stickers-slide">
                    <img src="@/assets/stickers/BW.png" alt="sticker/png">
                    <img src="@/assets/stickers/image25.png" alt="sticker/png">
                    <img src="@/assets/stickers/image26.png" alt="sticker/png">
                    <img src="@/assets/stickers/image29.png" alt="sticker/png">
                    <img src="@/assets/stickers/image27.png" alt="sticker/png">
                </div>
            </div> -->
            <StickersCarouselCards :heroStickers="heroStickers"/>
        </div>
    </div>
</template>

<style scoped>

    @keyframes slideTopBot {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(-100%);
        }
    }

    @keyframes slideBotTop {
        from{
            transform: translateY(-100%);
        }
        to{
            transform: translateY(0%);
        }
    }
    .stickersFirstCol .stickers-slide{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        animation: slideTopBot 20s linear infinite;
    }
    .stickersSecondCol .stickers-slide{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        animation: slideBotTop 20s linear infinite;
    }
    .stickers-slide img{
        width: 250px;
        margin: 40px 0;
        background-color: #F3F3F3;
        padding: 28px;
        border-radius: 10px;
    }

    /* .stickers:hover .stickers-slide{
        animation-play-state: paused;
    } */
</style>