<script setup>

</script>

<template>
    <div bg-black px-32 py-8 >

        <section flex flex-row justify-between items-center max-w-7xl mx-auto mt-xl>

            <!-- LOGO SECTION -->
            <section >

            <nuxt-link to="/" flex flex-row items-center>

            <!-- LOGOT IMG -->
            <div w-16 h-16 flex justify-center items-center rounded-2 overflow-hidden mr-3>
                <img w-full h-full src="@/assets/img/logo.png" alt="logo/png">
            </div>
        
            <!-- LOGO TEXT -->
            <h1 class="logo" decoration-none text-white>STRANGE <br> BEASTS</h1>
        
            </nuxt-link>

            </section>
            <!-- MENU SECTION -->
            <ul list-none flex flex-row text-xl uppercase>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/products">Shop</nuxt-link></li>
                <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/contact" >Contact</nuxt-link></li>
                <li><nuxt-link class="cart" to="/cart">Cart</nuxt-link></li>
            </ul>
        </section>
        
    </div>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: white;
    }
    
    a:hover:not(.logo) {
        color: #F04C61;
        font-style: italic;
    }
    
    .router-link-exact-active:not(.cart) {
        color: #F04C61;
    }

    li {
        margin-right: 2rem;
        font-weight: 900;
    }

    
    



</style>