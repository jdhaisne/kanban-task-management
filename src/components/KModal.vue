<template>
  <Teleport to="body">
    <div class="modal" :class="{ 'modal--dark': responsiveStore.isDarkTheme }">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script setup>
import { useResponsiveStore } from "../stores/responsive.js";
const responsiveStore = useResponsiveStore();
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;

.modal {
  // width: 70%;
  // max-width: 300px;
  padding: 1rem;
  min-height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  background-color: white;
  border-radius: 8px;
  &--dark {
    background-color: $dark-grey;
  }
}
</style>
