<script setup lang="ts">
import MyPreloader from "./components/MyPreloader.vue";

import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 3500);
});
</script>

<template>
  <MyPreloader />
  <div class="h-screen">123</div>
</template>
