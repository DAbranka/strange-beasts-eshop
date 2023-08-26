<script setup>
    const { products } = useProducts()
</script>

<template>
    <div>
        <section w-full>
            <section max-w-7xl mx-auto>
                <section grid grid-cols-3 gaps-10 justify-items-center>

                    <div flex flex-col m-9 v-for="product in products">
                        <div productCard mb-6>
                            <img w-64 :src="product.image" :alt="product.title">
                        </div>
                        <div mb-6>
                            <h2>{{ product.title }}</h2>
                            <p>{{ product.description }}</p>
                            <p>Price €{{ product.price }}</p>
                        </div>
                    
                        <!-- Add to cart -->
                        <div>
                            <button addCartBtn>Add to cart</button>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>

</style>