<script setup lang="ts"></script>

<template>
  <section
    class="pointer-events-none select-none z-[-1] w-screen h-screen fixed top-0"
  >
    <div class="relative w-full h-full">
      <div class="noise-bg"></div>
    </div>
  </section>
</template>

<style scoped>
.noise-bg {
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  width: 200%;
  height: 200vh;
  background: transparent
    url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
  background-repeat: repeat;
  animation: bg-animation 0.4s infinite;
  background-size: 25%;
  transition-duration: 300ms;
  visibility: visible;
}

@keyframes bg-animation {
  0% {
    top: -50%;
    left: 0%;
  }
  10% {
    top: 25%;
    left: 50%;
  }
  20% {
    top: -50%;
    left: -100%;
  }
  30% {
    top: 50%;
    left: -50%;
  }
  40% {
    top: -75%;
    left: 0%;
  }
  50% {
    top: 50%;
    left: 50%;
  }
  60% {
    top: -50%;
    left: -100%;
  }
  70% {
    top: 25%;
    left: 50%;
  }
  80% {
    top: -50%;
    left: -100%;
  }
  90% {
    top: 50%;
    left: -50%;
  }
  100% {
    top: -35%;
    left: 0%;
  }
}
</style>
