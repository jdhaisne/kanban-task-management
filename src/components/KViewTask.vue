<template>
  <div class="view-task">
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

    <p class="view-task__description" v-if="task.description">
      {{ task.description }}
    </p>
    <KViewSubtasks :subtasks="task.subtasks"> </KViewSubtasks>
    <KViewStatus :statusIndex="colIndex" isDisabled></KViewStatus>
  </div>
  <KModal
    v-if="isModalTaskMenuVisible"
    :top="''"
    :left="'166px'"
    :transform="'translate(0,-110%)'"
    :width="'200px'"
    :height="'90px'"
    @behind-click="$emit('clickBehindMenu')"
  >
    <div class="task-menu">
      <span class="task-menu__text" @click="$emit('clickEdit')">Edit Task</span>
      <span class="task-menu__text--delete" @click="$emit('clickDelete')">
        Delete Task
      </span>
    </div>
  </KModal>
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
@use "/src/assets/scss/_variables.scss" as *;
.view-task {
  display: flex;
  flex-direction: column;
  gap: 25px;
  &__title {
    font: $heading-l;
    &__wrapper {
      display: flex;
      gap: 5px;
    }
    &__icon {
      margin: auto;
      &__wrapper {
        flex-grow: 1;
      }
    }
  }
  &__description {
    font: $body-l;
    color: $medium-grey;
  }
}

.task-menu {
  display: flex;
  flex-direction: column;
  &__text {
    color: $medium-grey;
    &--delete {
      color: $red;
    }
  }
}
</style>
