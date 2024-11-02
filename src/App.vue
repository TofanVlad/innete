<script setup lang="ts">
import MyPreloader from "./components/MyPreloader.vue";
import myBgNoise from "./components/MyBgNoise.vue";
import MyHeader from "./components/MyHeader.vue";
import myNav from "./components/MyNav.vue";
import MyVideoSection from "./components/MyVideoSection.vue";
import MyWorkSection from "./components/MyWorkSection.vue";
import MyFooter from "./components/MyFooter.vue";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 3500);
});
</script>

<template>
  <MyPreloader />
  <myBgNoise />
  <myNav />
  <MyHeader />
  <hr class="border-black" />
  <MyVideoSection />
  <MyWorkSection />
  <MyFooter />
</template>
