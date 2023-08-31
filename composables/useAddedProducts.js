export function useAddedProducts() {

    const addedProducts = ref([]);

    return {
        addedProducts,
    }
}