<script setup>
    const { addedProducts } = defineProps(['addedProducts'])
    console.log('Added Products List:', addedProducts);
</script>

<template>
    <div>
        <section grid grid-cols-1 grid-rows-2 gap-10>
            <div>
                <h1 text-42>
                    Cart Page
                </h1>
            </div>
            <div>
                <section>
                    <p v-for="product in addedProducts" :key="product.id">
                        Product ID: {{ product.id }}
                        Product Title: {{ product.title }}
                        Product Price: {{ product.price }}
                    </p>
                </section>
            </div>
        </section>
    </div>
</template>