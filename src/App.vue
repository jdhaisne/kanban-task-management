<template>
  <KHeaderBar></KHeaderBar>
  <div
    class="main-wrapper"
    :class="{ 'main-wrapper--dark': responsiveStore.isDarkTheme }"
  >
    <KSideBar></KSideBar>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { useResponsiveStore } from "/src/stores/responsive.js";

import KHeaderBar from "./components/KHeaderBar.vue";
import KSideBar from "./components/KSideBar.vue";

const responsiveStore = useResponsiveStore();
const resized = function () {
  responsiveStore.setScreenWidth(window.innerWidth);
};

onMounted(() => {
  window.addEventListener("resize", resized);
});
onUnmounted(() => {
  window.removeEventListener("resize", resized);
});
</script>
<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.main-wrapper {
  min-height: 100%;
  display: flex;
  flex-grow: 1;
  &--dark {
    background-color: $very-dark-grey-dark-bg;
  }
}
</style>
