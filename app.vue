<script setup>
  const { cart } = useCart()
  const { addedProducts } = useAddedProducts()

  // * UPDATE CART
  function updateCart(product){
    cart.value.push(product.id)

    // ! log
    console.log('Cart:', cart.value.length);
    console.log('Selected Product:', {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      });
      
    // * ADDED PRODUCT
    addedProducts.value.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    })

    // ! log
    console.log('Added Products:', addedProducts.value.length, addedProducts.value);
  }

  // * REMOVE PRODUCT
  function removeProduct(product){
    const index = addedProducts.value.indexOf(product)
    cart.value.splice(index, 1)
    addedProducts.value.splice(index, 1)

    // ! log
    console.log('Cart:', cart.value.length);
    console.log('Product Removed:', {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image
      });
  }

</script>

<template>
  <NuxtLayout :cart="cart">
    <NuxtPage @addToCart="updateCart($event)" @removeProduct="removeProduct" :addedProducts="addedProducts"/>
  </NuxtLayout>
</template>

<style>
  * {
    font-family: roboto;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #F3F3F3;
  }
</style>
