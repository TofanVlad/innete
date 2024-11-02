<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";
</script>

<template>
  <div
    class="w-full bg-secondary rounded-b-[48px] text-[2.4vw] font-medium overflow-hidden flex items-center py-12"
  >
    <Vue3Marquee
      class="h-full overflow-y-hidden"
      :clone="true"
      :pauseOnHover="true"
      :duration="5"
    >
      <span class="inline-block mr-5 whitespace-nowrap">Say Hello.</span>
      <span
        class="inline-block text-[8vw] leading-[.5rem] self-end mb-1 whitespace-nowrap mr-5"
        >*</span
      >
      <span class="inline-block mr-5 whitespace-nowrap">Ready to connect?</span>
      <span
        class="inline-block text-[8vw] leading-[.5rem] self-end mb-1 whitespace-nowrap mr-5"
        >*</span
      >
    </Vue3Marquee>
  </div>
</template>

<style scoped>
marquee {
  gap: 20px;
}
</style>
