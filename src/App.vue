<script setup lang="ts">
import MyPreloader from "./components/MyPreloader.vue";
import MyHeader from "./components/MyHeader.vue";
import myNav from "./components/MyNav.vue";
import myVideoSection from "./components/myVideoSection.vue";
import { onMounted } from "vue";

// onMounted(() => {
//   setTimeout(() => {
//     document.body.style.overflowY = "auto";
//   }, 3500);
// });
</script>

<template>
  <!-- <MyPreloader /> -->
  <myNav />
  <MyHeader />
  <hr class="border-black" />
  <myVideoSection />
  <div class="h-screen"></div>
</template>
