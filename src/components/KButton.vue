<template>
  <button class="button" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

const variant = ["primary", "secondary", "destructive"];
export default {
  props: {
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
  },
  setup(props) {
    const buttonClasses = computed(() => {
      const classes = [`button--${props.variant}`];
      if (props.isBig) {
        classes.push("button--is-big");
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
  padding: 8px 69.5px;
  font: $body-l;
  border-radius: 24px;
  color: $white;
  outline: none;
  border: none;

  &--is-big {
    padding: 15px 61.5px;
    font-size: 15px;
    line-height: 18px;
  }

  &:hover {
    background-color: $main-purple-hover;
  }

  &--secondary {
    background: rgba($main-purple, 0.1);
    color: $main-purple;
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
