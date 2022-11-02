<template>
  <div>
    <h3>Current Status</h3>
    <KDropdown
      :items="boardsStore.getStatusList"
      :selectedIndex="statusIndex"
      @update:selectedIndex="$emit('update:status', $event)"
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
  statusIndex: {
    type: Number,
    default: undefined,
  },
});

const emit = defineEmits(["update:status"]);

const boardsStore = useBoardsStore();
</script>

<style lang="scss" scoped></style>
