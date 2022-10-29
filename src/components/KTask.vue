<template>
  <div class="task">
    <h1 class="task__title">{{ taskName }}</h1>
    <span class="task__sub"
      >{{ nbSubstaskComplete }} of {{ nbSubstask }} substask</span
    >
  </div>
</template>

<script setup>
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
  }
  &__sub {
    font: $body-m;
    color: $medium-grey;
  }
}
</style>
