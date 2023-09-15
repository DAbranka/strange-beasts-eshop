<script setup>

</script>

<template>
    <section overflow-hidden>
            <!-- FEATURES TITLE -->
            <div class="title" w-full>
                <div class="slide">
                    <p text-27rem font-900 uppercase whitespace-nowrap>
                        Features• 
                    </p>
                </div>
                <div class="slide">
                    <p text-27rem font-900 uppercase whitespace-nowrap>
                        Features• 
                    </p>
                </div>
            </div>
            
            <!-- FEATURES CONTAINER -->
            <section w-full h-3xl my-23 flex justify-center >
                <!-- FEATURES CARDS CONTAINER -->
                <section w-7xl flex flex-row justify-between items-center>
                    <!-- FEATURE CARD w Text -->

                    <article  w-sm h-2xl flex flex-col justify-around>
                        <!-- IMAGE -->
                        <div flex items-center justify-center overflow-hidden rounded-2xl>
                            <img src="/img/features/feature01.png" alt="image/png">	
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
                            <img src="/img/features/feature02.png" alt="image/png">	
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
                            <img src="/img/features/feature03.png" alt="image/png">	
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
</template>

<style scoped>
    .title {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    .slide {
        display: flex;
        flex-direction: row;
        animation: slide 10s linear infinite;
    }
    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
</style>