<template>
  <KHeaderBar></KHeaderBar>
  <div class="main-wrapper">
    <KSideBar></KSideBar>
    <router-view></router-view>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import { useResponsiveStore } from "/src/stores/responsive.js";

import KHeaderBar from "./components/KHeaderBar.vue";
import KSideBar from "./components/KSideBar.vue";

export default {
  setup() {
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

    return { responsiveStore };
  },

  components: { KHeaderBar, KSideBar },
};
</script>
<style lang="scss" scoped>
.main-wrapper {
  min-height: 100%;
  display: flex;
  flex-grow: 1;
}
</style>
