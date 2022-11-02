<template>
  <div class="view-task__title__wrapper">
    <h2 class="view-task__title">
      {{ task.title }}
    </h2>
    <div
      class="view-task__title__icon__wrapper"
      @click="$emit('clickMenuTask')"
    >
      <img
        class="view-task__title__icon"
        src="/src/assets/images/icon-vertical-ellipsis.svg"
      />
    </div>
  </div>

  <p class="view-task__description">
    {{ task.description }}
  </p>
  <KViewSubtasks :subtasks="task.subtasks"> </KViewSubtasks>
  <KViewStatus :statusIndex="colIndex" isDisabled></KViewStatus>

  <KModal
    v-if="isModalTaskMenuVisible"
    @behind-click="$emit('clickBehindMenu')"
  >
    <span @click="$emit('clickEdit')">Edit Task</span>
    <span @click="$emit('clickDelete')"> Delete Task </span></KModal
  >
</template>

<script setup>
import { computed, inject, ref } from "vue";

const props = defineProps({
  task: {
    type: Object,
    default: {
      title: "",
      description: "",
      status: "",
      subtasks: [],
    },
  },
  isModalTaskMenuVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  "clickEdit",
  "clickMenuTask",
  "clickBehindMenu",
  "clickDelete",
]);

const colIndex = inject("colIndex", 0);

const getSubtaskscompleted = computed(() => {
  return props.task.subtasks.reduce((sum, subtask) => {
    if (subtask.isCompleted) return sum + 1;
    return sum;
  }, 0);
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
.view-task {
  &__title {
    &__wrapper {
      display: flex;
      gap: 5px;
    }
    &__icon {
      margin: auto;
    }
  }
}
</style>
