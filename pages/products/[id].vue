<script setup>
    const { id } = useRoute().params
    const { products } = useProducts()
    const product = products.value.find((p) => p.id === id)
    
    console.log('Route ID:', id)
    console.log('All Products:', products.value)
    console.log('Selected Product:', product)
</script>

<template>
    <div w-full>
        <section m-auto max-w-7xl>

            <div v-if="product" grid grid-cols-2 gap-10 my-10>

                <!-- LEFT SIDE -->
                <div productCard m-auto>
                    <img :src="product.image" :alt="product.title" />
                </div>

                <!-- RIGHT  SIDE -->
                <article>
                    <h2>{{ product.title }}</h2>
                    <p>Price: {{ product.price }}</p>
                </article>

            </div>

            <div v-else>
                <p>Product not found</p>
            </div>
        </section>
    </div>
</template>