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
                        <section class="product" grid grid-cols-4 py-10 items-center>
                            <!-- IMG -->
                            <div mx-auto>
                                <img w-36 :src="product.image" :alt="product.title">
                            </div>
                            <!-- TITLE -->
                            <section>
                                <h2 text-4xl font-900 mx-auto>
                                    {{ product.title }}
                                </h2>
                            </section>
                            <!-- PRICE -->
                            <p text-3xl font-500 mx-auto>
                                €{{ product.price }}
                            </p>
                            <!-- REMOVE BTN -->
                            <button
                            @click="removeProduct(product)"
                            cursor-pointer
                            border-none
                            bg-black
                            rounded-xl
                            mx-auto
                            w-fit
                            p-3>
                                <i class="material-symbols-outlined text-10 font-500 text-white hover:text-prime">delete</i>
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