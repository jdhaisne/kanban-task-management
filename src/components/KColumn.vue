<template>
  <div class="column">
    <h1 class="column__title">{{ colName }}</h1>
    <div
      v-for="(task, index) in tasks"
      @dragover="onDragOver($event, index)"
      @drop="onDrop($event, index)"
      class="dropzone"
    >
      <KTask
        :key="index"
        :task="task"
        :taskIndex="index"
        @dragged="onDrag($event, index)"
        :draggedX="draggedX"
        :draggedY="draggedY"
        isDraggable
      ></KTask>
    </div>
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

let draggedIndex = null;
let draggedX = null;
let draggedY = null;

const onDrag = (event, index) => {
  draggedIndex = index;
  console.log("drag", event);
};

const onDragOver = (event, index) => {
  console.log("over", index);
  event.preventDefault();
};

const onDrop = (event, index) => {
  console.log("drop", index);
  const temp = props.tasks[draggedIndex];
  props.tasks.splice(draggedIndex, 1);
  props.tasks.splice(index, 0, temp);
  draggedX = 0;
  draggedY = 0;
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
