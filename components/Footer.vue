<script setup>

</script>

<template>
    <div>
        <section w-full bg-black->
            <section max-w-7xl mx-auto h-full flex flex-row justify-between>
                <article w-sm my-24>
                    <!-- LOGO SECTION -->
                    <section>
                        <nuxt-link to="/" flex flex-row items-start no-underline>
                            <!-- LOGOT IMG -->
                            <div w-32 h-32 flex justify-center items-center overflow-hidden mr-3>
                                <img w-full h-full src="/img/logo.png" alt="logo/png">
                            </div>
                        
                            <!-- LOGO TEXT -->
                            <h1 text-3xl decoration-none text-white>STRANGE <br> BEASTS</h1>
                        </nuxt-link>
                    </section>
                </article>

                <article text-white w-sm my-24>
                    <h4 uppercase text-xl mb-3>
                        Support
                    </h4>
                    <ul list-none>
                        <nuxt-link to="/about" no-underline text-white><li>About</li></nuxt-link>
                        <li>FAQ</li>
                        <nuxt-link to="/portfolio" no-underline text-white><li>Portfolio</li></nuxt-link>
                    </ul>
                    <br>
                    <h4 uppercase text-xl mb-3>
                        Contact
                    </h4>
                    <p>
                        hello@strangebeasts.com
                    </p>
                    <br>
                    <h4 uppercase text-xl mb-3>
                        Social
                    </h4>
                    <nuxt-link no-underline text-white to="https://www.instagram.com/_strangebeasts/"><p uppercase>Instagram</p></nuxt-link>
                </article>

                <article w-sm my-24 text-white>
                    <h4 uppercase text-white text-xl mb-6>
                        Newsletter
                    </h4>
                    <p mb-6>
                        Subscibe to receive updates on product release dates,
                        exclusive deals and more.
                    </p>
                    <div flex flex-row>
                        <input placeholder="email@example.com" pl-3 class="w-full border-none h-8 rounded mr-3">
                        <button class="rounded border-none bg-prime text-white font-bold px-4 py-2 cursor-pointer">Subscribe</button>
                    </div>
                </article>
            </section>
        </section>
    </div>
</template>

<style scoped>

</style>