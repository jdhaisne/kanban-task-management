<template>
  <div class="textarea__wrapper">
    <textarea
      class="textarea form__text"
      :class="{
        'textarea--dark': responsiveStore.isDarkTheme,
        'form__text--dark': responsiveStore.isDarkTheme,
      }"
      type="textarea"
      v-model="currentValue"
      :placeholder="placeholder"
    >
    </textarea>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useResponsiveStore } from "../stores/responsive";
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelvalue"]);

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
.textarea {
  width: 100%;
  min-height: 100px;
  // font: normal normal bold 15px/19px "Plus Jakarta Sans", sans-serif;
  padding: 10px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  user-select: none;
  &--dark {
    background-color: $dark-grey;
  }
  &:placeholder-shown {
    font-weight: 500;
    color: $medium-grey;
  }
}
</style>
