<template>
  <label class="switch">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <!-- <input type="checkbox" v-model="state" /> -->
    <span class="switch__slider switch__slider--round"></span>
  </label>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({ modelValue: [Boolean, Array] });
const emit = defineEmits(["update:modelValue"]);

const onChange = function (event) {
  state.value = event.target.checked;
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  &__slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $main-purple;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &--round {
      border-radius: 34px;
      &::before {
        border-radius: 50%;
      }
    }
    &::before {
      position: absolute;
      content: "";
      height: 14px;
      width: 14px;
      left: 4px;
      bottom: 3px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
}

input:checked + .switch__slider {
  background-color: $main-purple;
}

input:focus + .switch__slider {
  box-shadow: 0 0 1px $main-purple;
}

input:checked + .switch__slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(17px);
}
</style>
