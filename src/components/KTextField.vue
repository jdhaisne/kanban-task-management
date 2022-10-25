<template>
  <div class="textfield__wrapper">
    <input
      class="textfield"
      type="text"
      :placeholder="placeholder"
      :class="{ 'textfield--error': errorMessage }"
    />
    <span class="textfield__error-message">{{ errorMessage }}</span>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    console.log(props.placeholder);
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.textfield {
  min-width: 350px;
  min-height: 40px;
  font: $heading-m;
  border: 1px solid rgba($medium-grey, 0.25);
  border-radius: 4px;
  user-select: none;
  &__wrapper {
    position: relative;
    width: 350px;
  }
  &--error {
    border-color: $red;
  }
  &:placeholder-shown {
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
