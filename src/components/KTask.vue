<template>
  <div
    class="task"
    :class="{
      'task--dark': responsiveStore.isDarkTheme,
      'task--draggable': isDraggable,
      'task--dragged': draggedX,
    }"
    :style="{
      left: draggedX + 'px',
      height: draggedY + 'px',
    }"
    @click="openModalViewTask()"
    :draggable="isDraggable"
    @dragstart="$emit('dragged', $event)"
  >
    <h1
      class="task__title"
      :class="{ 'task__title--dark': responsiveStore.isDarkTheme }"
    >
      {{ task.title }}
    </h1>
    <span class="task__sub"
      >{{ getSubtaskscompleted }} of {{ task.subtasks.length }} substask</span
    >
  </div>
  <KModal v-if="isModalViewTaskOpen" @behind-click="closeModalViewTask()">
    <KTaskModal :task="task" @close="closeModalViewTask"> </KTaskModal>
  </KModal>
</template>

<script setup>
import { computed, onMounted, onUnmounted, provide, ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";

const props = defineProps({
  task: {
    type: Object,
    default: {},
  },
  taskIndex: {
    type: Number,
  },
  isDraggable: {
    type: Boolean,
    default: false,
  },
  draggedX: {
    type: Number,
    default: undefined,
  },
  draggedY: {
    type: Number,
    default: undefined,
  },
});

const emits = defineEmits(["dragged"]);

const responsiveStore = useResponsiveStore();

provide("taskIndex", props.taskIndex);

const isModalViewTaskOpen = ref(false);

const getSubtaskscompleted = computed(() => {
  return props.task.subtasks.reduce((sum, subtask) => {
    if (subtask.isCompleted) return sum + 1;
    return sum;
  }, 0);
});

const openModalViewTask = () => {
  isModalViewTaskOpen.value = true;
};

const closeModalViewTask = () => {
  isModalViewTaskOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.task {
  padding: 25px;
  width: 280px;
  background-color: $white;
  border-radius: 8px;
  box-shadow: 0px 4px 6px $box-shadow-color;
  &__title {
    font: $heading-m;
    &--dark {
      color: $white;
    }
  }
  &__sub {
    font: $body-m;
    color: $medium-grey;
  }
  &--dark {
    background-color: $dark-grey;
  }
  &__dragged {
    position: relative;
    left: 100px;
    right: 100px;
  }
  // &--draggable {
  //   position: absolute
  //   width: 208px;
  //   height: 110px;
  // }
  &:hover {
    & .task__title {
      color: $main-purple;
    }
  }
}
</style>
