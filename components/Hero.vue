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
                        <h1 font-900 class="heroTitle" heroTitle mt-8xl mb-3xl>
                            Exclusive <br>
                            <span>Stickers</span>
                        </h1>
                    </article>
                    <!-- END -->

                    <!-- BUTTONS -->
                    <section>
                        <nuxt-link to="/products"><button btn bg-prime py-2 hover:bg-red-600>Shop Now</button></nuxt-link>
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

<style>
    .heroTitle {
        position: relative;
        display: inline-block;
    }

    .heroTitle::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #0C0C0C;
        top: 0;
        left: 0;
        z-index: 2;
        animation: animate 2s forwards;
        transition-timing-function: cubic-bezier(1, -0.04, 0.08, 1.01);
    }

    @keyframes animate {
        0% {
            height: 100%;
        }
        100% {
            height: 0%;
        }
    }
</style>