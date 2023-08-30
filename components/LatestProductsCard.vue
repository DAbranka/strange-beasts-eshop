<script setup>
    const { product } = defineProps(['product'])
</script>

<template>
    <div>
        <article>
            <!-- Image -->
            <section productCard mb-3>
                <img w-74 :src="product.image" alt="product.title">
            </section>
            <!-- Card Title -->
            <section class="text-center mb-3">
                <h4 class="text-2xl font-bold uppercase">{{ product.title }}</h4>
            </section>
            <!-- Add to cart -->
            <section class="text-center">
                <button addCartBtn hover:drop-shadow-xl>
                    Buy for €{{ product.price }}
                </button>
            </section>
        </article>
    </div>
</template>


<style scoped>

</style>