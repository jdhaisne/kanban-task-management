<template>
  <div class="view-status">
    <h3 class="view-status__title">Status</h3>
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

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;

.view-status {
  &__title {
    font: $heading-s;
    color: $medium-grey;
  }
}
</style>
