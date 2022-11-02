<template>
  <KTaskForm
    :title="'Edit Task'"
    :buttonText="'Save Changes'"
    :task="task"
    @update:task="onUpdate"
  >
  </KTaskForm>
</template>

<script setup>
import { inject, ref } from "vue";
import { useBoardsStore } from "../stores/boards";
const props = defineProps({
  task: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["update"]);

const boardsStore = useBoardsStore();
const colIndex = inject("colIndex", 0);
const taskIndex = inject("taskIndex", 0);

const onUpdate = (newTask, newStatus) => {
  Object.assign(
    boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex],
    newTask
  );
  if (newStatus) {
    boardsStore.moveTaskTo(taskIndex, colIndex, newStatus);
  }

  emit("update");
};
</script>

<style lang="scss" scoped></style>
