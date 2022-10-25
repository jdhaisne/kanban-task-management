<template>
  <button
    class="button"
    :class="buttonClasses"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

const variant = ["primary", "secondary", "destructive"];
export default {
  props: {
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
  },
  setup(props) {
    const buttonClasses = computed(() => {
      const classes = [`button--${props.variant}`];
      if (props.isBig) {
        classes.push("button--is-big");
      }
      if (props.isDark) {
        classes.push("button--dark");
      }

      return classes;
    });

    return {
      buttonClasses,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.button {
  background: $main-purple;
  font: $body-l;
  border-radius: 24px;
  color: $white;
  outline: none;
  border: none;

  &--is-big {
    font-size: 15px;
    line-height: 18px;
  }

  &:hover {
    background-color: $main-purple-hover;
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
}
</style>
