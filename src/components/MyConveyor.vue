<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
const marquee = Array.from({ length: 10 }, (_, i) =>
  i % 2 === 0 ? "Say Hello." : "Ready to connect?"
);
</script>

<template>
  <div
    class="w-full bg-secondary rounded-b-[48px] text-[2.4vw] font-medium overflow-hidden flex items-center py-12"
  >
    <Vue3Marquee
      class="h-full overflow-y-hidden"
      :duration="25"
      :pauseOnHover="true"
    >
      <template v-for="(word, index) in marquee" :key="index">
        <span class="inline-block mr-5 whitespace-nowrap">{{ word }}</span>
        <span
          class="inline-block text-[8vw] leading-[.5rem] self-end mb-1 whitespace-nowrap mr-5"
          >*</span
        >
      </template>
    </Vue3Marquee>
  </div>
</template>
