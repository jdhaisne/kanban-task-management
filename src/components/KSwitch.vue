<template>
  <label class="switch swit">
    <input type="checkbox" />
    <span class="switch__slider switch__slider--round"></span>
  </label>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
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
    background-color: #ccc;
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
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
}

input:checked + .switch__slider {
  background-color: #2196f3;
}

input:focus + .switch__slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .switch__slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>
