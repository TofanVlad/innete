<script setup lang="ts">
import MyBgNoise from "./MyBgNoise.vue";
</script>

<template>
  <myBgNoise />
  <footer class="flex flex-col px-8 overflow-hidden text-lg text-secondary">
    <img src="/inette.svg" alt="logo" class="w-12 -ml-3 aspect-square invert" />
    <div class="flex justify-between font-medium text-right">
      <h2 class="opacity-50">more</h2>
      <div class="flex flex-col gap-2">
        <p>about</p>
        <p>work</p>
      </div>
    </div>
    <div class="flex justify-between font-medium text-right">
      <h2 class="opacity-50">contact</h2>
      <div class="flex flex-col gap-2">
        <p>work@inette.co</p>
        <p>+84 98 1223 497</p>
      </div>
    </div>
    <div class="flex justify-between font-medium text-right">
      <h2 class="opacity-50">social media</h2>
      <div class="flex flex-col gap-2">
        <p>behance</p>
        <p>instagram</p>
        <p>linkedin</p>
      </div>
    </div>
    <h1
      class="text-secondary text-[42.5vw] font-semibold leading-none pointer-events-none select-none -mb-16"
    >
      Let's
    </h1>
  </footer>
</template>
