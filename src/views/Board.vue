<template>
  <div
    v-if="boardsStore.isBoardEmpty"
    class="board board--empty"
    :class="{ 'board--dark': responsive.isDarkTheme }"
  >
    <span class="board__empty-text"
      >This board is empty. Create a new column to get started.</span
    >
    <KButton class="board__empty-button" :width="174" :height="48"
      >+ Add New Column</KButton
    >
  </div>
  <div v-else class="board">
    <KColumn
      v-for="(column, index) in boardsStore.getCurrentBoard.columns"
      :key="index"
      :col-name="column.name"
      :tasks="column.tasks"
    ></KColumn>
    <div
      class="board__add-btn"
      :class="{ 'board__add-btn--dark': responsive.isDarkTheme }"
    >
      <span class="board__add-btn__text">+ New Column</span>
    </div>
  </div>
</template>

<script>
import KButton from "../components/KButton.vue";
import KHeaderBar from "../components/KHeaderBar.vue";
import { useResponsiveStore } from "../stores/responsive";
import { useBoardsStore } from "../stores/boards";
import KColumn from "../components/KColumn.vue";

export default {
  props: {},
  setup() {
    const responsive = useResponsiveStore();
    const boardsStore = useBoardsStore();
    return { responsive, boardsStore };
  },
  components: { KHeaderBar, KButton, KColumn },
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
  &--dark {
    background-color: $very-dark-grey-dark-bg;
  }
  &--empty {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
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
    background-color: $new-col-btn;
    text-align: center;
    display: flex;
    border-radius: 6px;

    &__text {
      margin: auto;
      font: $heading-xl;
      color: $medium-grey;
    }
    &--dark {
      background-color: $new-col-btn-dark;
    }
  }
}
</style>
