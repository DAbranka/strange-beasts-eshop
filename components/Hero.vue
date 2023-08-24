<script setup>

</script>

<template>
    <div bg-black>
        <section text-white flex flex-row max-w-7xl h-screen mx-auto>
            
            <!-- LEFT CONTAINER -->
            <section w-full flex items-center >
                
                <!-- CONTENT -->
                <section>
                    <!-- TITLE -->
                    <article>
                        <h1 heroTitle mt-8xl mb-3xl>
                            Exclusive <br>
                            Stickers
                        </h1>
                    </article>
                    <!-- END -->

                    <!-- BUTTONS -->
                    <section>
                        <nuxt-link to="/products"><button btn bg-prime py-2>Shop Now</button></nuxt-link>
                        <nuxt-link to="/about"><button btn bg-white text-black py-2 px-3xl>About</button></nuxt-link>
                    </section>
                    <!-- END -->
                </section>
            </section>

            <!-- RIGHT CONTAINER -->
            <section w-full overflow-hidden flex justify-center>
                <StickersCarousel />
            </section>
        </section>
    </div>
</template>