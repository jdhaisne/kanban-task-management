<template>
  <div>
    <h3>Subtask</h3>
    <div class="subtask" v-for="(subtask, index) in subtasks" :key="index">
      <KTextField
        :modelValue="subtask.title"
        @update:modelValue="$emit('update:subtask', $event, index)"
      >
        {{ subtask.title }}
      </KTextField>
      <div @click="$emit('delete:subtask', index)">
        <i class="icon icon--very-small icon-cross"></i>
      </div>
    </div>
    <KButton @click="$emit('add:subtask')"> + Add New Subtask </KButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  subtasks: {
    type: Array,
    default: [],
  },
});

const newSubtasks = ref([]);
const emit = defineEmits(["update:subtask", "add:subtask", "delete:subtask"]);
</script>

<style lang="scss" scoped>
.subtask {
  display: flex;
  justify-content: space-between;
}
</style>
