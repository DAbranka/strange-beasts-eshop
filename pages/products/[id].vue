<script setup>

    // * PRODUCT PAGE
    const { id } = useRoute().params

    // * PRODUCTS aray
    const { products } = useProducts()

    // * PRODUCT object in PRODUCTS array
    const product = products.value.find((p) => p.id === id)

    // * ADD TO CART
    const emit = defineEmits(['addToCart'])

    function addToCart(product){
        emit('addToCart', product)
    }
    
    // console.log('Route ID:', id)
    // console.log('All Products:', products.value)
    // console.log('Selected Product:', product)
</script>

<template>
    <div w-full>
        <section m-auto max-w-7xl>

            <div v-if="product" grid grid-cols-2 gap-10 my-10>

                <!-- LEFT SIDE -->
                <div productCard bg-white m-auto>
                    <img w-73 :src="product.image" :alt="product.title" />
                </div>

                <!-- RIGHT  SIDE -->
                <article flex flex-col justify-center>

                    <!-- Details -->
                    <section mb-9>
                        <h2 text-6xl font-900 mb-9>{{ product.title }}</h2>
                        <p text-5xl font-900 >€{{ product.price }}</p>
                    </section>

                    <!-- Add to cart -->
                    <div>
                        <button hover:drop-shadow-xl @click="addToCart(product)" class="addCartBtn">Add to cart</button>
                    </div>
                </article>
                

            </div>

            <div v-else>
                <p>Product not found</p>
            </div>
        </section>
    </div>
</template>