<script setup>
    const { products } = useProducts()
</script>

<template>
    <div>
        <section >
            <!--  TITLE -->
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
                <article mx-auto max-w-7xl flex flex-row justify-around>
                    <!-- Card -->
                    <LatestProductsCard
                        v-for="(product, index) in products.slice(-3)" 
                        :key="index"
                        :product="product"
                    />
                </article>
            </section>

            <!-- ALL PRODUCTS BTN -->
            <section class="text-center mt-24">
                <nuxt-link to="/products">
                    <button bg-gray hover:bg-prime text-white border-none text-2xl font-bold py-2 px-6 uppercase rounded-xl cursor-pointer>
                        View All Products
                    </button></nuxt-link>
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