<template>
  <div class="column">
    <h1 class="column__title">{{ colName }}</h1>
    <KTask
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
      :taskIndex="index"
      @drag="onDrag"
      draggable
    ></KTask>
  </div>
</template>

<script setup>
import { provide } from "vue";

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
  colIndex: { type: Number },
});

provide("colIndex", props.colIndex);

const onDrag = () => {
  console.log("drag");
};
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
