<script setup>
    const { cart } = defineProps(['cart'])
    console.log('Cart', cart);
</script>

<template>
    <div relative>
        <div class="cart material-symbols-outlined text-3xl" to="/cart">shopping_basket</div>
        <div absolute top-5 left-3 bg-white scale-80 flex items-center justify-center w-full rounded-100 >
            <p flex justify-center text-5 text-prime>
                {{ cart }}
            </p>
        </div>
    </div>
</template>

<style scoped>

</style>