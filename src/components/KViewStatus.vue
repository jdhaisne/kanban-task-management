<template>
  <div class="view-status">
    <h3
      class="form__text"
      :class="{ 'form__text--dark': responsiveStore.isDarkTheme }"
    >
      Status
    </h3>
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
import { useResponsiveStore } from "../stores/responsive";

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
const responsiveStore = useResponsiveStore();
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
</style>
