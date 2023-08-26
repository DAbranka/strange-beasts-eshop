<script setup>
    const { products } = useProducts()
</script>

<template>
    <div>
        <section w-full>
            <section max-w-7xl mx-auto>
                <section grid grid-cols-3 my-18 gaps-10 justify-items-center>

                    <div flex flex-col items-center m-9 v-for="product in products" :key="product.id">
                        <div productCard mb-6>
                            <img w-64 :src="product.image" :alt="product.title">
                        </div>

                        <article mb-3>
                            <h2 text-3xl mb-3>{{ product.title }}</h2>
                        </article>
                    
                        <!-- Add to cart -->
                        <section>
                            <button addCartBtn> Buy for €{{product.price}}</button>
                        </section>
                    </div>
                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>

</style>