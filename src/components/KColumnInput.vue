<template>
  <div class="form__input">
    <h3
      class="form__label"
      :class="{ 'form__text--dark': responsiveStore.isDarkTheme }"
    >
      Board Columns
    </h3>
    <div class="column-input__wrapper">
      <div
        class="column-input"
        v-for="(column, index) in newColumns"
        :key="index"
      >
        <KTextField
          :modelValue="column.name"
          @update:modelValue="$emit('update:name', $event, index)"
        ></KTextField>
        <div
          class="column-input__icon__wrapper"
          @click="$emit('delete:column', index)"
        >
          <i class="column-input__icon icon icon--very-small icon-cross"></i>
        </div>
      </div>
      <KButton @click="$emit('add:column')" :variant="'secondary'">
        + Add New Column
      </KButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";

const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["update:name", "add:column", "delete:column"]);

const responsiveStore = useResponsiveStore();
const newColumns = props.columns;

// const updateName = (name, index) => {
//     emit()
// }
</script>

<style lang="scss" scoped>
.column-input {
  display: flex;
  gap: 10px;
  &__wrapper {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    flex-direction: column;
  }
  &__icon {
    margin: auto;
    &__wrapper {
      display: flex;
    }
  }
}
</style>
