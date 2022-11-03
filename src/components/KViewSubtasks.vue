<template>
  <div class="subtasks__wrapper">
    <h3 class="subtasks__title">
      {{ `Subtasks (${getSubtaskscompleted} of ${subtasks.length})` }}
    </h3>
    <div class="subtask__wrapper">
      <div class="subtask" v-for="(subtask, index) in subtasks" :key="index">
        <KCheckbox
          :modelValue="subtask.isCompleted"
          @update:modelValue="onUpdate($event, index)"
        >
          {{ subtask.title }}
        </KCheckbox>
      </div>
    </div>
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

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;

.subtasks {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__title {
    font: $heading-s;
    color: $medium-grey;
  }
}

.subtask {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
