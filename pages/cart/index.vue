<script setup>
    const { addedProducts } = defineProps(['addedProducts'])
    console.log('Added Products List:', addedProducts);

    // * REMOVE PRODUCT
    const emit = defineEmits(['removeProduct'])
    function removeProduct(product){
        emit('removeProduct', product)
    }

    // * UPDATE QUANTITY
    function updateQuantity(quantity, product){
        const index = addedProducts.indexOf(product)
        addedProducts[index].quantity = quantity
    }

    // UPDATE TOTAL PRICE
    function updateTotalePrice(newTotalPrice, product) {
        const index = addedProducts.indexOf(product);
        addedProducts[index].totalePrice = newTotalPrice;
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
                                <IncrementDecrement :addedProducts="addedProducts"
                                @updateQuantity="updateQuantity($event, product)"
                                @updateTotalePrice="updateTotalePrice($event, product)"
                                />
                            </section>
                            <!-- PRICE -->
                            <div v-if="product.quantity <= 1">
                                <p text-3xl font-500 mx-auto>
                                    €{{ product.price }}
                                </p>
                            </div>
                            <div v-else>
                                <p else text-3xl font-500 mx-auto>
                                    €{{ product.totalePrice }}
                                </p>
                            </div>
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