<script setup>
    const { addedProducts } = defineProps(['addedProducts'])
    console.log('Added Products List:', addedProducts);

    // * REMOVE PRODUCT
    const emit = defineEmits(['removeProduct'])
    function removeProduct(product){
        emit('removeProduct', product)
    }
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
                        <!-- PRODUCT -->
                        <section class="product" p-10 grid grid-cols-3 gap-10 items-center>
                            <!-- IMG -->
                            <div productCard bg-white mr-10>
                                <img w-74 :src="product.image" alt="">
                            </div>
                            <!-- INFOS -->
                            <article>
                                <!-- TITLE -->
                                <h2 text-7xl font-900 mb-10>
                                    {{ product.title }}
                                </h2>
                                <!-- PRICE -->
                                <p text-5xl>
                                    €{{ product.price }}
                                </p>
                            </article>
                            <!-- REMOVE BTN -->
                            <button @click="removeProduct(product)" hover:bg-prime hover:text-white text-5xl font-900 bg-white p-10>
                                Remove
                            </button>
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