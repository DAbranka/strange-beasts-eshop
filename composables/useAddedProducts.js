export function useAddedProducts() {

    const addedProducts = ref([]);

    const addProduct = (product) => {
        addedProducts.value.push(product);
    };
    
    const removeProduct = (product) => {
        const index = addedProducts.value.indexOf(product);
        addedProducts.value.splice(index, 1);
    };
    return {
        addedProducts,
        addProduct,
        removeProduct,
    };
}