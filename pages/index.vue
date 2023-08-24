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
            <div w-full bg-amber>
                <h2 text-27rem uppercase whitespace-nowrap>
                    Features
                </h2>
            </div>
            
            <!-- FEATURES CONTAINER -->
            <section w-full h-screen flex justify-center >
                <!-- FEATURES CARDS CONTAINER -->
                <section w-7xl h-screen flex flex-row justify-between items-center>
                    <!-- FEATURE CARD w Text -->
                    <article w-sm h-124 flex flex-col>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="https://source.unsplash.com/random/400x400" alt="image/png">	
                        </div>
                        <!-- TEXT -->
                        <p text-5xl uppercase font-bold>
                            High quality print
                        </p>
                    </article>
                    <article w-sm h-124 flex flex-col>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="https://source.unsplash.com/random/400x400" alt="image/png">	
                        </div>
                        <!-- TEXT -->
                        <p text-5xl uppercase font-bold>
                            Unique Design
                        </p>
                    </article>
                    <article w-sm h-124 flex flex-col>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="https://source.unsplash.com/random/400x400" alt="image/png">	
                        </div>
                        <!-- TEXT -->
                        <p text-5xl uppercase font-bold>
                            Easy application
                        </p>
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