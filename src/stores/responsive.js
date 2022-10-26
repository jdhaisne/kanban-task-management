import { defineStore } from "pinia";
import { computed, ref } from "vue";
export const useResponsiveStore = defineStore("responsive", () => {
  const screenWidth = ref(window.innerWidth);
  const getScreenType = computed(() => {
    if (screenWidth.value < 768) {
      return "small";
    } else if (screenWidth.value < 1200) {
      return "medium";
    } else {
      return "large";
    }
  });
  const setScreenWidth = function (width) {
    screenWidth.value = width;
  };
  return { screenWidth, getScreenType, setScreenWidth };
});
