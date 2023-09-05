<script setup>
    const { addedProducts } = defineProps(['addedProducts'])

    // * AMOUNT OF PRODUCT
    const amount = ref(1)

    // * UNIT PRICE
    const selectedProduct = ref(addedProducts[0])
    const unitPrice = ref(selectedProduct.value.price)
    
    // * EMIT
    const emit = defineEmits(['updateQuantity'])

    // Function to update the total price
    function updateTotalePrice() {
        const totalePrice = amount.value * unitPrice.value;
        emit('updateQuantity', amount.value);
        emit('updateTotalePrice', totalePrice);
    }

    // Function to set the selected product and unit price
    function setSelectedProduct(product) {
        selectedProduct.value = product;
        unitPrice.value = product.price;
        updateTotalePrice();
    }

    // * INCREMENT  
    function increment(){
        amount.value++
        updateTotalePrice()
    }

    // * DECREMENT
    function decrement(){
        if(amount.value > 1){
            amount.value--
            updateTotalePrice()
        }
    }

    // Initial setup when the component is mounted
    setSelectedProduct(addedProducts[0]);

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