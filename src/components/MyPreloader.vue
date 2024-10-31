<script setup lang="ts"></script>

<template>
  <header class="overflow-y-hidden h-[22.5vw]">
    <div class="absolute w-screen h-screen bg-primary bg-anim"></div>

    <h1
      class="absolute text-[33.5vw] font-semibold leading-[0.55] invert mix-blend-difference top-[65.5%] text-center [&>*]:align-top [&>*]:inline-block text-translate"
    >
      <span class="invisible letter-anim">I</span>
      <span class="invisible letter-anim">n</span>
      <span class="invisible letter-anim">e</span>
      <span class="invisible letter-anim">t</span>
      <span class="invisible letter-anim">t</span>
      <span class="invisible letter-anim">e</span>
    </h1>
  </header>
</template>

<style scoped>
.text-translate {
  animation: textTranslate 0.75s forwards;
  animation-delay: 2500ms;
}

.letter-anim {
  animation: letterSlide 1s ease-out forwards;
}

.bg-anim {
  animation: shrinkBg 1s forwards;
  animation-delay: 2550ms;
}

span:nth-child(1) {
  animation-delay: 600ms;
}
span:nth-child(2) {
  animation-delay: 700ms;
}
span:nth-child(3) {
  animation-delay: 750ms;
}
span:nth-child(4) {
  animation-delay: 800ms;
}
span:nth-child(5) {
  animation-delay: 850ms;
}
span:nth-child(6) {
  animation-delay: 900ms;
}

@keyframes letterSlide {
  from {
    padding-top: 50%;
    visibility: visible;
  }
  to {
    padding-top: 0;
    visibility: visible;
  }
}

@keyframes textTranslate {
  from {
    top: 65.5%;
  }
  to {
    top: 0%;
  }
}

@keyframes shrinkBg {
  from {
    height: 100vh;
  }
  to {
    height: 0;
  }
}
</style>
