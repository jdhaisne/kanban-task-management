<template>
  <div class="form__input">
    <h3
      class="form__label"
      :class="{ 'form__text--dark': responsiveStore.isDarkTheme }"
    >
      Subtask
    </h3>
    <div class="subtask" v-for="(subtask, index) in subtasks" :key="index">
      <KTextField
        :modelValue="subtask.title"
        @update:modelValue="$emit('update:subtask', $event, index)"
        :placeholder="placeholderList[index]"
      >
        {{ subtask.title }}
      </KTextField>
      <div
        class="subtask__icon__wrapper"
        @click="$emit('delete:subtask', index)"
      >
        <i class="subtask__icon icon icon--very-small icon-cross"></i>
      </div>
    </div>
    <KButton @click="$emit('add:subtask')" :variant="'secondary'">
      + Add New Subtask
    </KButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";
const props = defineProps({
  subtasks: {
    type: Array,
    default: () => [
      { title: "", isCompleted: false },
      { title: "", isCompleted: false },
    ],
  },
  placeholderList: {
    type: Array,
    default: () => ["e.g. Make coffee", "e.g. Drink coffe & smile"],
  },
});

const emit = defineEmits(["update:subtask", "add:subtask", "delete:subtask"]);

const responsiveStore = useResponsiveStore();
const newSubtasks = ref([]);
</script>

<style lang="scss" scoped>
.subtask {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  &__icon {
    margin: auto;
    &__wrapper {
      display: flex;
      cursor: pointer;
    }
  }
}
</style>
