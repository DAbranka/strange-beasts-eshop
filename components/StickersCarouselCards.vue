<script setup>
    const { heroStickers } = defineProps(['heroStickers'])
</script>

<template>
    <div>
        <!-- CONTAINER -->
        <div  overflow-hidden flex >
            <div class="colOne">
                <div class="stickersColOne" >
                    <div class="stickers--slide" productCard v-for="s in heroStickers">
                        <img :src="s.image" :alt="s.title">
                    </div>
                </div>
                <div class="stickersColTwo" >
                    <div class="stickers--slide" productCard v-for="s in heroStickers">
                        <img :src="s.image" :alt="s.title">
                    </div>
                </div>
            </div>
            <div class="colTwo">
                <div class="stickersColOne" >
                    <!-- CONTENT -->
                    <div class="stickers--slide" productCard v-for="s in heroStickers">
                        <img :src="s.image" :alt="s.title">
                    </div>
                </div>
                <div class="stickersColTwo" >
                    <!-- CONTENT -->
                    <div class="stickers--slide" productCard v-for="s in heroStickers">
                        <img :src="s.image" :alt="s.title">
                    </div>
                </div>
            </div>
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

    .colOne {
        width: 340px;
    }
    .colTwo {
        width: 340px;
    }

    .colOne .stickersColOne{
        animation: slideTopBot 15s linear infinite;
    }
    .colOne .stickersColTwo{
        animation: slideTopBot 15s linear infinite;
    }
    .colTwo .stickersColOne{
        animation: slideBotTop 15s linear infinite;
    }
    .colTwo .stickersColTwo{
        animation: slideBotTop 15s linear infinite;
    }
    
    .stickers--slide{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: scale(0.8);
    }

    .stickers--slide img{
        width: 85%;
        height: auto;
    }
</style>