<template>
  <div class="task" :class="{ 'task--dark': responsiveStore.isDarkTheme }">
    <h1
      class="task__title"
      :class="{ 'task__title--dark': responsiveStore.isDarkTheme }"
    >
      {{ taskName }}
    </h1>
    <span class="task__sub"
      >{{ nbSubstaskComplete }} of {{ nbSubstask }} substask</span
    >
  </div>
</template>

<script setup>
import { useResponsiveStore } from "../stores/responsive";
const props = defineProps({
  taskName: {
    type: String,
    default: "",
  },
  nbSubstask: {
    type: Number,
    default: 1,
  },
  nbSubstaskComplete: {
    type: Number,
    default: 0,
  },
});

const responsiveStore = useResponsiveStore();
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.task {
  padding: 25px;
  width: 280px;
  background-color: $white;
  border-radius: 8px;
  &__title {
    font: $heading-m;
    &--dark {
      color: $white;
    }
  }
  &__sub {
    font: $body-m;
    color: $medium-grey;
  }
  &--dark {
    background-color: $dark-grey;
  }
}
</style>
