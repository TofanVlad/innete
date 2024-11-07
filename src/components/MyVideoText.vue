<script lang="ts" setup>
import { cn } from "../helper/cn.ts";
defineProps<{
  title: string;
  text: string;
}>();
</script>

<template>
  <div
    :class="
      cn(
        'flex items-center justify-between bg-secondary border-b border-primary h-full overflow-hidden w-screen px-4'
      )
    "
  >
    <h1 class="text-[12vw] font-bold uppercase">{{ title }}</h1>
    <div class="flex flex-col justify-center gap-12 h-full max-w-[420px]">
      <div class="w-2 bg-black rounded-full aspect-square"></div>
      <p class="font-medium">{{ text }}</p>
    </div>
  </div>
</template>
