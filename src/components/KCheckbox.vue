<template>
  <label
    class="checkbox form"
    :class="{ 'checkbox--dark': responsiveStore.isDarkTheme }"
    ><input
      class="checkbox__input"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span
      class="checkbox__checkmark"
      :class="{ 'checkbox__checkmark--dark': responsiveStore.isDarkTheme }"
    ></span>
    <span
      class="checkbox__text form__text"
      :class="{ 'form__text--dark': responsiveStore.isDarkTheme }"
    >
      <slot> </slot>
    </span>
  </label>
</template>

<script setup>
import { useResponsiveStore } from "../stores/responsive";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);

const responsiveStore = useResponsiveStore();
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.checkbox {
  font: $heading-s;
  flex-direction: row;
  padding: 10px;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  background: $light-grey;

  border-radius: 4px;
  min-height: 40px;

  &:hover {
    background: $main-purple-hover;
  }
  &__wrapper {
  }
  &__input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    border: none;
    border-radius: 2px;
  }
  &__checkmark {
    display: block;
    // position: absolute;
    // top: 12px;
    // left: 9px;
    height: 16px;
    min-width: 16px;
    margin: auto 0;
    background-color: #eee;
    border: 2px rgba($medium-grey, 0.25) solid;
    border-radius: 2px;
    &--dark {
      background-color: $dark-grey;
    }
    &:after {
      content: "";
      position: relative;
      display: none;
      left: 3.5px;

      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  &__text {
    margin: auto 0;
  }
  &--dark {
    background-color: $very-dark-grey-dark-bg;
    &:hover {
      background-color: $main-purple;
    }
  }
  & input:checked ~ .checkbox__checkmark {
    background-color: $main-purple;
  }
  & input:checked ~ .checkbox__checkmark:after {
    display: block;
  }

  & input:checked ~ .checkbox__text {
    color: $medium-grey;
    text-decoration: line-through;
  }
}
</style>
