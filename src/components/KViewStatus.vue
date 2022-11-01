<template>
  <div>
    <h3>Current Status</h3>
    <KDropdown
      :items="boardsStore.getStatusList"
      :selectedIndex="colIndex"
      @update:selectedIndex="onUpdate($event)"
    >
    </KDropdown>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useBoardsStore } from "../stores/boards";

const props = defineProps({
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
const colIndex = inject("colIndex");
const taskIndex = inject("taskIndex");

const boardsStore = useBoardsStore();

const onUpdate = (index) => {
  if (!isDisabled) boardsStore.moveTaskTo(taskIndex, colIndex, index);
};
</script>

<style lang="scss" scoped></style>
