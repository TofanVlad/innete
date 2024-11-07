<script lang="ts" setup>
import { onMounted, ref, Ref } from "vue";
import { headerThree } from "./headerThree.ts";

const canvas: Ref<HTMLCanvasElement | null> = ref(null);

onMounted(() => {
  if (canvas.value !== null) {
    headerThree(canvas.value);
  }
});
</script>

<template>
  <section class="border-b border-black">
    <canvas ref="canvas" class="w-full h-full" />
  </section>
</template>
