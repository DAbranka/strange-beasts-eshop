<script setup>
    definePageMeta({
        layout: 'home-page-layout',
    })
</script>

<template>
    <div>
        <!-- FEATURES SECTION -->
        <section overflow-hidden>
            <!-- FEATURES TITLE -->
            <div w-full>
                <h2 text-27rem uppercase whitespace-nowrap>
                    Features
                </h2>
            </div>
            
            <!-- FEATURES CONTAINER -->
            <section w-full h-3xl flex justify-center >
                <!-- FEATURES CARDS CONTAINER -->
                <section w-7xl flex flex-row justify-between items-center>
                    <!-- FEATURE CARD w Text -->

                    <article  w-sm h-2xl flex flex-col justify-around>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="@/assets/img/features/feature01.png" alt="image/png">	
                        </div>
                        <!-- TEXT -->
                        <div h-24 py-2 flex items-start>
                            <p text-5xl uppercase font-bold>
                                High Quality Print
                            </p>
                        </div>
                    </article>

                    <article  w-sm h-2xl flex flex-col justify-around>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="@/assets/img/features/feature02.png" alt="image/png">	
                        </div>
                        <!-- TEXT -->
                        <div h-24 py-2 flex items-start>
                            <p text-5xl uppercase font-bold>
                                Unique <br> Design
                            </p>
                        </div>
                    </article>

                    <article  w-sm h-2xl flex flex-col justify-around>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="@/assets/img/features/feature03.png" alt="image/png">	
                        </div>
                        <!-- TEXT -->
                        <div h-24 py-2 flex items-start>
                            <p text-5xl uppercase font-bold>
                                Easy Aplication
                            </p>
                        </div>
                    </article>

                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>
    * {
        margin: 0;
    }
</style>