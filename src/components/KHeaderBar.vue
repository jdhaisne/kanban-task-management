<template>
  <div class="headerBar">
    <div class="headerBar__logo__wrapper">
      <img src="/src/assets/images/logo-light.svg" />
      <h1 class="headerBar__logo">KANBAN</h1>
    </div>
    <div class="headerBar__title__wrapper">
      <h1 class="headerBar__title">{{ pageTitle }}</h1>
    </div>
    <div class="headerBar__right">
      <KButton :height="48" :width="164"> + Add New Task</KButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: "unnamed",
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.headerBar {
  background-color: $white;
  display: flex;
  height: 15%;
  &__logo {
    &__wrapper {
      height: 100%;
      display: flex;
      border-right: 1px solid $border-color;
      font: $heading-xl;
      width: 300px;
      & > img {
        height: 25px;
        margin: auto 0 auto auto;
      }
    }
    margin: auto auto auto 0;
    position: relative;
    right: 110px;
  }
  &__title {
    &__wrapper {
      display: flex;
      height: 100%;
      flex-grow: 1;
      border-bottom: 1px solid $border-color;
    }
    font: $heading-xl;
    margin: auto 0;
  }
  &__right {
    height: 100%;
    // display: inline-block;
    border-bottom: 1px solid $border-color;
    margin-left: auto;
  }
}
</style>
