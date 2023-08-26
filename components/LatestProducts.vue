<script setup>
    const { stickers } = useStickers()
</script>

<template>
    <div>
        <section >
            <div class="title" mb-24>
                <div class="slide">
                    <h3 text-56 font-900 uppercase whitespace-nowrap overflow-hidden mt-24>
                        latest products•  
                    </h3>
                </div>
                <div class="slide">
                    <h3 text-56 font-900 uppercase whitespace-nowrap overflow-hidden mt-24>
                        latest products• 
                    </h3>
                </div>
            </div>

            <!-- PRODUCTS CONTAINER -->
            <section w-full overflow-hidden>
                <!-- Contenu -->
                <section mx-auto max-w-7xl flex flex-row justify-around>
                    <!-- Card -->

                    <article>
                        <!-- Image -->
                        <section productCard hover:drop-shadow-2xl mb-3>
                            <img :src="stickers[1][0].image" alt="stickers[1][0].title">
                        </section>

                        <!-- Card Title -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold uppercase">{{ stickers[1][0].title }}</h4>
                        </section>

                        <!-- Card Price -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold">Price: €{{ stickers[1][0].price }}</h4>
                        </section>

                        <!-- Add to cart -->
                        <section class="text-center">
                            <button addCartBtn hover:drop-shadow-xl>
                                Add to cart
                            </button>
                        </section>
                    </article>

                    <article>
                        <!-- Image -->
                        <section productCard hover:drop-shadow-2xl mb-3>
                            <img :src="stickers[0][3].image" alt="stickers[0][3].title">
                        </section>

                        <!-- Card Title -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold uppercase">{{ stickers[0][3].title }}</h4>
                        </section>

                        <!-- Card Price -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold">Price: €{{ stickers[0][3].price }}</h4>
                        </section>

                        <!-- Add to cart -->
                        <section class="text-center">
                            <button addCartBtn hover:drop-shadow-xl>
                                Add to cart
                            </button>
                        </section>
                    </article>

                    <article>
                        <!-- Image -->
                        <section productCard hover:drop-shadow-2xl mb-3>
                            <img :src="stickers[1][2].image" alt="stickers[1][2].title">
                        </section>

                        <!-- Card Title -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold uppercase">{{ stickers[1][2].title }}</h4>
                        </section>

                        <!-- Card Price -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold">Price: €{{ stickers[1][2].price }}</h4>
                        </section>

                        <!-- Add to cart -->
                        <section class="text-center">
                            <button addCartBtn hover:drop-shadow-xl>
                                Add to cart
                            </button>
                        </section>
                    </article>

                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>
    .title {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    .slide {
        display: flex;
        flex-direction: row;
        animation: slide 10s linear infinite;
    }
    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
</style>