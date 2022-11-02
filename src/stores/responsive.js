import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useResponsiveStore = defineStore("responsive", () => {
  const screenWidth = ref(window.innerWidth);
  const isDarkTheme = ref(false);
  const isSidebarHidden = ref(false);

  const getScreenType = computed(() => {
    if (screenWidth.value < 768) {
      return "small";
    } else if (screenWidth.value < 1200) {
      return "medium";
    } else {
      return "large";
    }
  });

  const setScreenWidth = (width) => {
    screenWidth.value = width;
  };

  const setDarkTheme = (isDark) => {
    isDarkTheme.value = isDark;
  };

  const setSidebarHidden = (isHidden) => {
    isSidebarHidden.value = isHidden;
  };

  return {
    screenWidth,
    getScreenType,
    setScreenWidth,
    isDarkTheme,
    setDarkTheme,
    isSidebarHidden,
    setSidebarHidden,
  };
});
