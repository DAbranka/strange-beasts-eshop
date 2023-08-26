<script setup>
    const { heroStickers } = useHeroStickers()
</script>

<template>
    <div>
        <section >
            <h3 text-56 font-900 uppercase whitespace-nowrap overflow-hidden mt-24>
                latest products
            </h3>

            <!-- PRODUCTS CONTAINER -->
            <section w-full overflow-hidden>
                <!-- Contenu -->
                <section mx-auto max-w-7xl my-24 flex flex-row justify-around>
                    <!-- Card -->

                    <article>
                        <!-- Image -->
                        <section productCard hover:drop-shadow-2xl mb-3>
                            <img :src="heroStickers[1][0].image" alt="heroStickers[1][0].title">
                        </section>

                        <!-- Card Title -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold uppercase">{{ heroStickers[1][0].title }}</h4>
                        </section>

                        <!-- Card Price -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold">Price: €{{ heroStickers[1][0].price }}</h4>
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
                            <img :src="heroStickers[0][3].image" alt="heroStickers[0][3].title">
                        </section>

                        <!-- Card Title -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold uppercase">{{ heroStickers[0][3].title }}</h4>
                        </section>

                        <!-- Card Price -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold">Price: €{{ heroStickers[0][3].price }}</h4>
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
                            <img :src="heroStickers[1][2].image" alt="heroStickers[1][2].title">
                        </section>

                        <!-- Card Title -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold uppercase">{{ heroStickers[1][2].title }}</h4>
                        </section>

                        <!-- Card Price -->
                        <section class="text-center mb-3">
                            <h4 class="text-2xl font-bold">Price: €{{ heroStickers[1][2].price }}</h4>
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

</style>