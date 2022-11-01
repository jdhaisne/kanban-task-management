<template>
  <label class="checkbox"
    ><input
      class="checkbox__input"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <slot> </slot>

    <span class="checkbox__checkmark"></span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.checkbox {
  font: $heading-s;
  display: block;
  position: relative;
  padding-top: 12px;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  background: $light-grey;
  max-width: 350px;
  border-radius: 4px;
  height: 40px;

  &:hover {
    background: $main-purple-hover;
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
    position: absolute;
    top: 12px;
    left: 9px;
    height: 16px;
    width: 16px;
    background-color: #eee;
    border: 2px rgba($medium-grey, 0.25) solid;
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 4px;
      top: 1px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  & input:checked ~ .checkbox__checkmark {
    background-color: $main-purple;
  }
  & input:checked ~ .checkbox__checkmark:after {
    display: block;
  }
}
</style>
