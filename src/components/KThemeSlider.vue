<template>
  <div
    class="theme-slider"
    :class="{ 'theme-slider--dark': responsive.isDarkTheme }"
  >
    <span
      class="theme-slider__icon icon icon--very-small icon-light-theme"
    ></span>
    <KSwitch
      :modelValue="darkToggle"
      @update:modelValue="onChange($event)"
    ></KSwitch>
    <span
      class="theme-slider__icon icon icon--very-small icon-dark-theme"
    ></span>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";

const responsive = useResponsiveStore();
const darkToggle = ref(responsive.isDarkTheme);

const onChange = (event) => {
  responsive.setDarkTheme(event);
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;

.theme-slider {
  width: 80%;
  height: 48px;
  display: flex;
  justify-content: center;
  background: $light-grey;
  margin: 0 auto;
  border-radius: 6px;
  &__icon {
    margin: auto 0;
  }
  & > .switch {
    margin: auto 15px;
  }
  &--dark {
    background-color: $very-dark-grey-dark-bg;
  }
}
</style>
