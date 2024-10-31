<script setup lang="ts">
import MyPreloader from "./components/MyPreloader.vue";
import MyHeader from "./components/MyHeader.vue";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 3500);
});
</script>

<template>
  <MyPreloader />
  <MyHeader />
  <div class="h-screen">123</div>
</template>
