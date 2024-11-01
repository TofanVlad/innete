<script lang="ts" setup>
import { Ref, ref } from "vue";
import MyVideoText from "./MyVideoText.vue";
const container: Ref<HTMLElement | null> = ref(null);

window.addEventListener("scroll", (event) => {
  if (
    (event.target as Document).scrollingElement.scrollTop < 820 &&
    container.value
  ) {
    container.value.style.position = "relative";
  }

  if (
    (event.target as Document).scrollingElement.scrollTop >= 820 &&
    container.value
  ) {
    container.value.style.position = "fixed";
  }
});
</script>

<template>
  <section class="relative top-0 w-screen h-screen" ref="container">
    <video
      src="https://framerusercontent.com/assets/Y3xoj8Z6bBOUIfAM4W69L3jwTU.webm"
      class="object-cover h-screen"
    ></video>
    <div class="absolute top-0 left-0 h-full container-scroll">
      <MyVideoText
        title="Website"
        text="Focused on creating visually stunning interfaces and exceptional user experiences. Every click is crafted for user-friendly, efficient, and meaningful products."
      />
      <MyVideoText
        class="flex-row-reverse"
        title="Brand"
        text="It forms the foundation of your company's identity, influencing every business decision and ensuring a cohesive, impactful presence in the marketplace."
      />
      <MyVideoText
        title="Visual"
        text="A brand's visual identity is its distinct visual language, designed to leave lasting impressions and foster emotional connections with the audience."
      />
      <div class="h-screen"></div>
    </div>
  </section>
</template>

<style>
.container-scroll {
  scroll-timeline: --squareTimeline y;
  scroll-timeline: --squareTimeline vertical;
}
</style>
