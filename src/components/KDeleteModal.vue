<template>
  <h3>Delete this {{ type }}</h3>
  <p>{{ typeText }}'</p>
  <KButton @click="$emit('delete')">Delete</KButton>
  <KButton @click="$emit('cancel')">Cancel</KButton>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "board",
  },
  name: {
    type: String,
    default: "",
  },
});

defineEmits(["delete", "cancel"]);

const typeText = computed(() => {
  if (props.type == "board")
    return "Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.";
  else
    return "Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.";
});
</script>

<style lang="scss" scoped></style>
