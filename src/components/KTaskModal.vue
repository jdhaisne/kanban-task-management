<template>
  <div class="task-modal">
    <template v-if="!isEditMode">
      <KViewTask
        :isModalTaskMenuVisible="isModalTaskMenuVisible"
        :task="task"
        @click-edit="onclickEdit()"
        @click-delete="onClickDelete()"
        @click-menu-task="openModalTaskMenu()"
        @click-behind-menu="closeModalTaskMenu()"
      ></KViewTask>
    </template>
    <template v-else-if="isDeleteMode">
      <KDeleteModal @delete="onDelete" @cancel="onCancel"></KDeleteModal>
    </template>
    <template v-else
      ><KUpdateTask @update="onUpdate" :task="task"> </KUpdateTask
    ></template>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useBoardsStore } from "../stores/boards";

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

const emit = defineEmits(["close"]);

const boardsStore = useBoardsStore();

const isEditMode = ref(false);
const isDeleteMode = ref(false);
const isModalTaskMenuVisible = ref(false);
const colIndex = inject("colIndex", 0);
const taskIndex = inject("taskIndex", 0);

const onUpdate = () => {
  emit("close");
};

const onclickEdit = () => {
  isEditMode.value = true;
  closeModalTaskMenu();
};

const onClickDelete = () => {
  console.log("del");
  isEditMode.value = true;
  isDeleteMode.value = true;
  // boardsStore.deleteTask(colIndex, taskIndex);
  closeModalTaskMenu();
};
const onDelete = () => {
  boardsStore.deleteTask(colIndex, taskIndex);
  emit("close");
};
const onCancel = () => {
  emit("close");
};
const openModalTaskMenu = () => {
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
