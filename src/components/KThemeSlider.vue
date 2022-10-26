<template>
  <div class="theme-slider">
    <span class="icon icon--very-small icon-light-theme"></span>
    <KSwitch></KSwitch>
    <span class="icon icon--very-small icon-dark-theme"></span>
  </div>
</template>

<script>
import KSwitch from "./KSwitch.vue";

export default { components: { KSwitch } };
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;

.theme-slider {
  width: 80%;
  display: flex;
  justify-content: space-around;
  background: $light-grey;
  margin: auto;
  border-radius: 6px;
}
</style>
