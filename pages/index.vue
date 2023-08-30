<script setup>
    definePageMeta({
        layout: 'home-page-layout',
    })

    // EMIT ADD TO CART
    const emit = defineEmits(['addToCart'])
    function addToCart(product) {
        emit('addToCart', product)
    }
</script>

<template>
    <div>
        <Head>
        <Title>STRANGE BEASTS | HOME</Title>
            <Meta name="description" content="Strange Beasts Homepage" />
        </Head>

        <!-- FEATURES SECTION -->
        <Features />
        <!-- TESTIMONIAL SECTION -->
        <Testimonials />

        <!-- LATEST PRODUCTS SECTION -->
        <LatestProducts @addToCart="addToCart"/>
        
        <!-- FEATURE / ABOUT SECTION -->
        <FeatureAbout />
    </div>
</template>

<style scoped>
    
</style>