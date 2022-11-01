<template>
  <h3>
    {{ `Subtasks (${getSubtaskscompleted} of ${subtasks.length})` }}
  </h3>
  <div class="subtask" v-for="(subtask, index) in subtasks" :key="index">
    <KCheckbox
      :modelValue="subtask.isCompleted"
      @update:modelValue="onUpdate($event, index)"
    >
      {{ subtask.title }}
    </KCheckbox>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";
import { useBoardsStore } from "../stores/boards";

const props = defineProps({
  subtasks: {
    type: Object,
    default: {
      title: "",
      isCompleted: false,
    },
  },
});

const boardsStore = useBoardsStore();

const colIndex = inject("colIndex");
const taskIndex = inject("taskIndex");

const getSubtaskscompleted = computed(() => {
  return props.subtasks.reduce((sum, subtask) => {
    if (subtask.isCompleted) return sum + 1;
    return sum;
  }, 0);
});

const onUpdate = (event, subtaskIndex) => {
  boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex].subtasks[
    subtaskIndex
  ].isCompleted = event;
};
</script>

<style lang="scss" scoped></style>
