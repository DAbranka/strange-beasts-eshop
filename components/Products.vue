<script setup>
    const { products } = defineProps(['products'])
</script>

<template>
    <Head>
        <Title>STRANGE BEASTS | STICKERS</Title>
        <Meta name="description" content="All the stickers" />
    </Head>

    <div>
        <section w-full>
            <section max-w-7xl mx-auto>
                <section grid grid-cols-3 my-18 gaps-10 justify-items-center>
                    <div v-for="product in products" :key="product.id">
                        <ProductCard :product="product" />
                    </div>
                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>

</style>