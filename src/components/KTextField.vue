<template>
  <div class="textfield__wrapper">
    <input
      v-bind="$attrs"
      class="textfield"
      type="text"
      v-model="currentValue"
      :placeholder="placeholder"
      :class="{ 'textfield--error': errorMessage }"
    />
    <span class="textfield__error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
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
  font: $heading-m;
  border: 1px solid rgba($medium-grey, 0.25);
  border-radius: 4px;
  user-select: none;
  &__wrapper {
    position: relative;
    width: 100%;
  }
  &--error {
    border-color: $red;
  }
  &:placeholder-shown {
    font-weight: 500;
    color: $medium-grey;
  }
  &:focus-visible {
    outline: none;
  }
  &__error-message {
    text-align: right;
    position: absolute;
    top: 10px;
    right: 8px;
    font: $heading-m;
    color: $red;
  }
}
</style>
