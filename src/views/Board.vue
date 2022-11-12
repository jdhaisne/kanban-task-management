<template>
  <div
    v-if="boardsStore.isBoardEmpty"
    class="board board--empty"
    :class="{ 'board--dark': responsive.isDarkTheme }"
  >
    <span class="board__empty-text"
      >This board is empty. Create a new column to get started.</span
    >
    <KButton
      @click="onAddColumn()"
      class="board__empty-button"
      :width="174"
      :height="48"
      >+ Add New Column</KButton
    >
  </div>
  <div v-else class="board">
    <KColumn
      v-for="(column, index) in boardsStore.getCurrentBoard.columns"
      :key="index"
      :col-name="column.name"
      :tasks="column.tasks"
      :colIndex="index"
    ></KColumn>
    <div
      class="board__add-btn"
      :class="{ 'board__add-btn--dark': responsive.isDarkTheme }"
      @click="onAddColumn"
    >
      <span class="board__add-btn__text">+ New Column</span>
    </div>
  </div>
  <KModal v-if="isOpen" @behind-click="closeAddColumn"></KModal>
</template>

<script setup>
import KButton from "../components/KButton.vue";
import KHeaderBar from "../components/KHeaderBar.vue";
import { useResponsiveStore } from "../stores/responsive";
import { useBoardsStore } from "../stores/boards";
import KColumn from "../components/KColumn.vue";
import { ref } from "vue";

const isOpen = ref(false);
const responsive = useResponsiveStore();
const boardsStore = useBoardsStore();

const onAddColumn = () => {
  isOpen.value = true;
};

const closeAddColumn = () => {
  isOpen.value = false;
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;

.board {
  overflow: auto;
  padding: 25px;
  display: flex;
  gap: 25px;
  width: 100%;
  &--dark {
    background-color: $very-dark-grey-dark-bg;
  }
  &--empty {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: auto;
  }
  &__empty-button {
    margin: 0 auto;
  }
  &__empty-text {
    margin: 0 auto;
    font: $heading-l;
    color: $medium-grey;
    text-align: center;
    width: 80%;
    margin-bottom: 10px;
  }
  &__add-btn {
    height: 100%;
    width: 280px;
    min-width: 280px;
    background: linear-gradient(
      180deg,
      $new-col-btn,
      0%,
      rgba(233, 239, 250, 0.5) 100%
    );
    text-align: center;
    display: flex;
    border-radius: 6px;

    &__text {
      margin: auto;
      font: $heading-xl;
      color: $medium-grey;
    }
    &--dark {
      background: linear-gradient(
        180deg,
        $new-col-btn-dark,
        0%,
        rgba(43, 44, 55, 0.125) 100%
      );
    }
  }
}
</style>
