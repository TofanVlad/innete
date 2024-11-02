<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  mainImage: string;
  secondImage: string;
}>();
</script>

<template>
  <article
    :style="{
      'background-image': `url(${mainImage})`,
    }"
    class="flex flex-col max-w-[45%] object-scale-down group [background-position:center] bg-no-repeat [background-size:125%] backdrop-blur-sm hover:[background-size:145%] duration-300 transition-all text-secondary"
  >
    <div
      class="relative w-full h-full p-4 overflow-hidden transition-all duration-300 group-hover:backdrop-blur-lg"
    >
      <div
        class="top-0 left-0 w-full h-full pointer-events-none noise-bg"
      ></div>
      <div class="sticky top-0">
        <h1 class="text-xl font-semibold tracking-wide w-max">{{ title }}</h1>
        <h2 class="text-lg font-medium w-max">{{ text }}</h2>
      </div>
      <div class="my-8 overflow-hidden aspect-video">
        <img
          :src="secondImage"
          alt="secondImage"
          class="w-full h-full translate-y-[105%] transition-all duration-300"
        />
      </div>
    </div>
  </article>
</template>

<style scoped>
article:hover > div > .noise-bg {
  opacity: 0.9;
}
article:hover * img {
  transform: translateY(0);
}
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
  animation: bg-animation 0.2s infinite;
  background-size: 50%;
  opacity: 0;
  transition: opacity;
  transition-duration: 300ms;
  visibility: visible;
}

@keyframes bg-animation {
  0% {
    background-position: 0, 0;
  }
  10% {
    background-position: -5%, -5%;
  }
  20% {
    background-position: -10%, 5%;
  }
  30% {
    background-position: 5%, -10%;
  }
  40% {
    background-position: -5%, 15%;
  }
  50% {
    background-position: -10%, 5%;
  }
  60% {
    background-position: 15%, 0;
  }
  70% {
    background-position: 0, 10%;
  }
  80% {
    background-position: -15%, 0;
  }
  90% {
    background-position: 10%, 5%;
  }
  100% {
    background-position: 5%, 0;
  }
}
</style>
