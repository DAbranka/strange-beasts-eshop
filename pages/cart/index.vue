<script setup>
    const { addedProducts } = defineProps(['addedProducts'])
    console.log('Added Products List', addedProducts.value);
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
                    <p>
                        Product: {{ addedProducts.id }}
                    </p>
                </section>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>