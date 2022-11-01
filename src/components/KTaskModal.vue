<template>
  <div class="view-task">
    <template v-if="!isEditMode">
      <KViewTask
        :isModalTaskMenuVisible="isModalTaskMenuVisible"
        :task="task"
        @click-edit="onclickEdit()"
        @click-menu-task="openModalTaskMenu()"
        @click-behind-menu="closeModalTaskMenu()"
      ></KViewTask>
    </template>
    <template v-else><KUpdateViewTask> </KUpdateViewTask></template>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
});

const isEditMode = ref(false);
const isModalTaskMenuVisible = ref(false);
const onclickEdit = () => {
  isEditMode.value = true;
  closeModalTaskMenu();
};
const openModalTaskMenu = () => {
  console.log("open");
  isModalTaskMenuVisible.value = true;
};
const closeModalTaskMenu = () => (isModalTaskMenuVisible.value = false);
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped></style>
