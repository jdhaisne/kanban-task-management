<template>
  <button
    class="button"
    :class="buttonClasses"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <span class="button__content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useResponsiveStore } from "../stores/responsive";

const props = defineProps({
  width: {
    type: Number,
    default: undefined,
  },
  height: {
    type: Number,
    default: undefined,
  },
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return variant.includes(value);
    },
  },
  isBig: {
    type: Boolean,
    default: false,
  },
  isDark: {
    type: Boolean,
    default: false,
  },
});

const responsiveStore = useResponsiveStore();

const buttonClasses = computed(() => {
  const classes = [`button--${props.variant}`];
  if (props.isBig) {
    classes.push("button--is-big");
  }
  if (responsiveStore.isDarkTheme) {
    classes.push("button--dark");
  }

  return classes;
});
</script>

<script>
const variant = ["primary", "secondary", "destructive"];

export default {};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.button {
  min-height: 40px;
  background: $main-purple;
  font: $body-l;
  border-radius: 24px;
  color: $white;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &__content {
    margin: auto;
    display: flex;
    font: $body-l;
    font-weight: 700;
  }
  &--is-big {
    font-size: 15px;
    line-height: 18px;
  }
  &--secondary {
    background: rgba($main-purple, 0.1);
    color: $main-purple;
    &.button--dark {
      background: $white;
    }
    &:hover {
      background: rgba($main-purple, 0.25);
      color: $main-purple;
    }
  }
  &--destructive {
    background: $red;

    &:hover {
      background: $red-hover;
    }
  }
  &:hover {
    background-color: $main-purple-hover;
  }
  &--dark {
  }
}
</style>
