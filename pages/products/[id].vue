<template>
    <div>
        <section>
            <div v-if="product">
                <h2>{{ product.title }}</h2>
                <p>Price: {{ product.price }}</p>
                <img :src="product.image" :alt="product.title" />
            </div>
            <div v-else>
                <p>Product not found</p>
            </div>
        </section>
    </div>
    </template>
    
    <script setup>
        const { id } = useRoute().params
        const { products } = useProducts()

        
        console.log('Route ID:', id)
        console.log('All Products:', products.value)

        const product = products.value.find((p) => p.id === id)
        console.log('Selected Product:', product)
    </script>

    <style scoped>
  /* Vos styles ici */
    </style>