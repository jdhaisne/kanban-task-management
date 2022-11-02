<template>
  <KTaskForm
    :title="'Edit Task'"
    :buttonText="'Save Changes'"
    :task="updatedTask"
    @update:task="onUpdate"
  >
  </KTaskForm>
</template>

<script setup>
import { inject, ref } from "vue";
import { useBoardsStore } from "../stores/boards";

const emit = defineEmits(["updated"]);

const colIndex = inject("colIndex");
const taskIndex = inject("taskIndex");

const boardsStore = useBoardsStore();

const updatedTask = ref(
  boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex]
);
const onUpdate = (newTask) => {
  console.log(newTask);
  Object.assign(
    boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex],
    newTask
  );

  emit("updated");
};
</script>

<style lang="scss" scoped></style>
