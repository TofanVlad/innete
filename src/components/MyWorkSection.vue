<script setup lang="ts">
import { ref, onMounted } from "vue";
import anime from "animejs";
import MyWorkCard from "./MyWorkCard.vue";
import MyConveyor from "./MyConveyor.vue";
const workContainer = ref<HTMLElement | null>(null);

onMounted(() => {
  const animation = anime({
    targets: document.querySelectorAll("[data-work-letter]"),
    marginTop: ["15%", "0"],
    duration: 600,
    easing: "easeInOutQuad",
    delay: anime.stagger(200),
    autoplay: false,
  });

  const paddingAnimation = anime({
    targets: workContainer.value,
    margin: ["0", "32px"],
    duration: 600,
    easing: "easeInOutQuad",
    autoplay: false,
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight > workContainer.value?.offsetTop!) {
      animation.seek(
        window.scrollY + window.innerHeight - workContainer.value?.offsetTop!
      );
    }

    const { bottom } = workContainer.value?.getBoundingClientRect()!;

    if (window.innerHeight - bottom > 0) {
      paddingAnimation.seek(window.innerHeight - bottom);
    }
  });
});
</script>

<template>
  <section class="relative bg-secondary rounded-b-[48px]" ref="workContainer">
    <div
      class="sticky top-0 bottom-[50vh] flex items-center w-full h-screen pointer-events-none"
    >
      <h1
        class="text-[30vw] font-semibold leading-wide italic text-primary select-none relative [&>*]:top-1/2 [&>*]:-translate-y-1/2 w-screen"
      >
        <div class="absolute -translate-x-1/2 left-[15%]" data-work-letter>
          W
        </div>
        <div class="absolute -translate-x-1/2 left-[40%]" data-work-letter>
          O
        </div>
        <div class="absolute -translate-x-1/2 left-[60%]" data-work-letter>
          R
        </div>
        <div class="absolute -translate-x-1/2 left-[80%]" data-work-letter>
          K
        </div>
      </h1>
    </div>
    <div class="sticky w-full mt-[10%] px-6 flex flex-col gap-[80px]">
      <MyWorkCard
        title="Align"
        text="Website"
        main-image="https://framerusercontent.com/images/RqAWM4o8hzxRB2QQb0QRi318KrI.webp"
        second-image="https://framerusercontent.com/images/w6L0lEJvGRtrDYAVDbiibdOiT7A.webp"
      />
      <MyWorkCard
        class="ml-auto"
        title="Spire"
        text="Website"
        main-image="https://framerusercontent.com/images/GSNCnizzhzOt4f6UojhcBCofdO0.webp"
        second-image="https://framerusercontent.com/images/iJcDCjeACNFlrc5pOxtH3SKAShc.webp"
      />
      <MyWorkCard
        title="Motiviration"
        text="Branding"
        main-image="https://framerusercontent.com/images/zLvJne7uFiiJoIZuknk0pOZat0w.webp"
        second-image="https://framerusercontent.com/images/IfAxRjuvRm9Fvr64icIrECcW4E.webp"
      />
      <MyWorkCard
        class="ml-auto"
        title="RORA"
        text="Branding"
        main-image="https://framerusercontent.com/images/AbMqgOvDWqCjMirCA9yYWH64H0.webp"
        second-image="https://framerusercontent.com/images/7iWbyT0tRYw7jMnD4YRIYeiihs.webp"
      />
    </div>
    <MyConveyor />
  </section>
</template>
