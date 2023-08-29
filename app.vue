<script setup>
  const { cart } = useCart()

  // * UPDATE CART
  function updateCart(){
    cart.value++
  }

</script>

<template>
  <NuxtLayout :cart="cart">
    <NuxtPage @addToCart="updateCart"/>
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
