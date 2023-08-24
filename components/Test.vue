<template>
    <div>
        <h1 text-9xl uppercase font-900 m-9>
            Test Component
        </h1>
    </div>
</template>

<style scoped>
h1 {
    position: relative;
    display: inline-block;
}

h1::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    top: 0;
    left: 0;
    z-index: 2;
    animation: animate 1s forwards;
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