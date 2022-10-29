<template>
  <div class="column">
    <h1 class="column__title">{{ colName }}</h1>
    <KTask
      v-for="(task, key) in tasks"
      :task-name="task.title"
      :nb-substask="task.nbSubstask"
      :nb-substask-complete="task.nbSubstaskComplete"
    ></KTask>
  </div>
</template>

<script setup>
import KTask from "./KTask.vue";

const props = defineProps({
  colName: {
    type: String,
    default: "colName",
  },
  colColor: {
    type: String,
    default: "red",
  },
  tasks: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__title {
    font: $heading-s;
    color: $medium-grey;
  }
}
</style>
