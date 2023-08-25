
<script setup>

</script>
<template>
    <div class="cards">
        <div class="slide" flex flex-row>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
        </div>
        <div class="slide" flex flex-row>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
            <TestimonialsCard mx-6/>
        </div>
    </div>
</template>

<style scoped>
    .cards {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    .slide {
        display: flex;
        flex-direction: row;
        animation: slide 50s linear infinite;
    }
    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .cards:hover .slide{
        animation-play-state: paused;
    }
</style>