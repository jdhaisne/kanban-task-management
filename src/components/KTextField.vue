<template>
  <div class="textfield__wrapper">
    <input
      v-bind="$attrs"
      class="textfield form__text"
      :class="{
        'textfield--error': errorMessage,
        'form__text--dark': responsiveStore.isDarkTheme,
        'textfield--dark': responsiveStore.isDarkTheme,
      }"
      type="text"
      v-model="currentValue"
      :placeholder="placeholder"
    />
    <span class="textfield__error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useResponsiveStore } from "../stores/responsive";
const props = defineProps({
  placeholder: {
    type: String,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const responsiveStore = useResponsiveStore();

const currentValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.textfield {
  width: 100%;
  min-height: 40px;
  padding-left: 10px;
  border: 1px solid rgba($medium-grey, 0.25);
  border-radius: 4px;
  user-select: none;
  &__wrapper {
    position: relative;
    width: 100%;
  }
  &__error-message {
    text-align: right;
    position: absolute;
    top: 10px;
    right: 8px;
    font: $heading-m;
    color: $red;
  }
  &--error {
    border-color: $red;
  }
  &--dark {
    background-color: $dark-grey;
  }
  &:placeholder-shown {
    font-weight: 500;
    color: $medium-grey;
  }
  &:focus-visible {
    outline: none;
  }
}
</style>
