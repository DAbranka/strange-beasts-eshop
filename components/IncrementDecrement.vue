<script setup>
    const { products } = useProducts()

    const number = ref(0)
    function increment(){
        number.value++
    }
    function decrement(){
        number.value--
    }

    // const price = computed(() => {
    //     return number.value * products[0].price
    // })

</script>

<template>
    <div>
        <div flex flex-row items-center mt-5>
            <button @click="decrement" text-xl font-900 px-3 cursor-pointer>-</button>
            <p bg-black text-white border-2 border-solid border-black w-fit font-900 text-xl px-3>{{ number }}</p>
            <button @click="increment" text-xl  font-900 px-3 cursor-pointer>+</button>
        </div>
    </div>
</template>


<style scoped>

</style>