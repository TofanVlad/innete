<script lang="ts" setup>
import { onMounted, ref } from "vue";
import MyVideoText from "./MyVideoText.vue";
import anime from "animejs";

const parrentContainer = ref<HTMLElement | null>(null);
const containerScroll = ref<HTMLElement | null>(null);

onMounted(() => {
  const animation = anime({
    targets: document.querySelectorAll("[data-video-text]"),
    maxHeight: ["100%", "0"],
    minHeight: ["100%", "0"],
    duration: 600,
    easing: "easeInOutQuad",
    opacity: [
      { value: 1, duration: 600 },
      { value: 0, duration: 0 },
    ],
    delay: anime.stagger(200),
    autoplay: false,
  });

  const paddingAnimation = anime({
    targets: containerScroll.value,
    padding: ["0", "24px"],
    borderRadius: ["0", "16px"],
    duration: 600,
    easing: "easeInOutQuad",
    autoplay: false,
  });

  window.onscroll = () => {
    if (window.scrollY > parrentContainer.value?.offsetTop!) {
      animation.seek((window.scrollY - parrentContainer.value?.offsetTop!));
    }

    const { height } = parrentContainer.value?.getBoundingClientRect()!;
    const startHeight = height - 400


    if (window.scrollY > startHeight) {
      paddingAnimation.seek(window.scrollY - startHeight);
    }
  }

});
</script>


<template>
  <div class="h-[260vh]" ref="parrentContainer">
    <section class="sticky top-0 w-screen h-screen" ref="containerScroll">
      <video src="../assets/video.mp4" class="z-50 object-cover w-full h-screen" autoplay muted loop></video>
      <div class="absolute inset-0 h-screen container-scroll">
        <div class="h-full max-h-[33.3%]">
          <MyVideoText title="Website" data-video-text
            text="Focused on creating visually stunning interfaces and exceptional user experiences. Every click is crafted for user-friendly, efficient, and meaningful products." />
        </div>
        <div class="h-full max-h-[33.3%]">
          <MyVideoText class="flex-row-reverse" title="Brand" data-video-text
            text="It forms the foundation of your company's identity, influencing every business decision and ensuring a cohesive, impactful presence in the marketplace." />
        </div>
        <div class="h-full max-h-[33.3%]">
          <MyVideoText title="Visual" data-video-text
            text="A brand's visual identity is its distinct visual language, designed to leave lasting impressions and foster emotional connections with the audience." />
        </div>
      </div>
    </section>
  </div>
</template>
