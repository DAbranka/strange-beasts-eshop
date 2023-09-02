<script setup>
    const { addedProducts } = defineProps(['addedProducts'])
    console.log('Product Price:', addedProducts.value);

    // * AMOUNT OF PRODUCT
    const amount = ref(1)

    // * UNIT PRICE
    const unitPrice = ref(addedProducts[0].price)
    console.log('Unit Price:', unitPrice.value);
    
    // * EMIT
    const emit = defineEmits(['updateQuantity'])

    // * INCREMENT  
    function increment(){
        amount.value++
        updateTotalePrice()
        emit('updateQuantity', amount.value)
    }

    // * DECREMENT
    function decrement(){
        if(amount.value > 1){
            amount.value--
            updateTotalePrice()
            emit('updateQuantity', amount.value)
        }
    }

    // * UPDATE TOTALE PRICE
    function updateTotalePrice(){
        const totalePrice = amount.value * unitPrice.value
        emit('updateTotalePrice', totalePrice)
        console.log('Totale Price:', totalePrice);
    }


</script>

<template>
    <div>
        <div flex flex-row items-center mt-5>
            <!-- decrement -->
            <button @click="decrement" text-xl font-900 px-3 cursor-pointer>
            -
            </button>
            <!-- amount -->
            <p bg-black text-white border-2 border-solid border-black w-fit font-900 text-xl px-3>
            {{ amount }}
            </p>
            <!-- increment -->
            <button @click="increment" text-xl font-900 px-3 cursor-pointer>+
            </button>
        </div>
    </div>
</template>


<style scoped>

</style>