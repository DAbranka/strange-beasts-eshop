<script setup>
    const { addedProducts } = defineProps(['addedProducts'])
    console.log('Added Products List:', addedProducts);
</script>

<template>
    <div w-full>
        <section mx-auto max-w-7xl>
            <div>
                <h1 text-42 m-10>
                    Cart
                </h1>
            </div>
            <div>
                <section>
                    <article v-for="product in addedProducts" :key="product.id">
                        <section class="product" p-10 flex flex-row items-center>
                            <div productCard bg-white mr-10>
                                <img w-74 :src="product.image" alt="">
                            </div>
                            <div>
                                <h2 text-7xl font-900 mb-10>
                                    {{ product.title }}
                                </h2>
                                <p text-5xl>
                                    €{{ product.price }}
                                </p>
                            </div>
                        </section>
                    </article>
                </section>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .product {
        border-top: 1px solid #E5E5E5;
    }
</style>