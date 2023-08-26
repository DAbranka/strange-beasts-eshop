<script setup>
    const { products } = useProducts()
</script>

<template>
    <div>
        <section w-full>
            <section max-w-7xl mx-auto>
                <section grid grid-cols-3 my-18 gaps-10 justify-items-center>

                    <div flex flex-col items-center m-9 v-for="product in products">
                        <div productCard mb-6>
                            <img w-64 :src="product.image" :alt="product.title">
                        </div>

                        <article mb-6>
                            <h2 mb-3>{{ product.title }}</h2>
                            <p text-xl font-bold >Price: €{{ product.price }}</p>
                        </article>
                    
                        <!-- Add to cart -->
                        <section>
                            <button addCartBtn>View Product</button>
                        </section>
                    </div>
                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>

</style>