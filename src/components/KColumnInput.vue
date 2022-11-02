<template>
  <h3>Columns</h3>
  <div>
    <div v-for="(column, index) in newColumns" :key="index">
      <KTextField
        :modelValue="column.name"
        @update:modelValue="$emit('update:name', $event, index)"
      ></KTextField>
      <div @click="$emit('delete:column', index)">
        <i class="icon icon--very-small icon-cross"></i>
      </div>
    </div>
    <KButton @click="$emit('add:column')"> + Add New Column </KButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["update:name", "add:column", "delete:column"]);

const newColumns = props.columns;

// const updateName = (name, index) => {
//     emit()
// }
</script>

<style lang="scss" scoped></style>
