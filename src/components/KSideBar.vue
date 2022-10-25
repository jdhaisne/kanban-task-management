<template>
  <div class="sidebar">
    <div class="sidebar__list">
      <h2 class="sidebar__list__title">All Boards({{ boardListLength }})</h2>
      <div
        class="sidebar__list__item"
        :class="{ 'sidebar__list__item--current': index == currentBoard }"
        v-for="(item, index) in boardList"
        :key="index"
      >
        <object
          data="/src/assets/images/icon-board.svg"
          height="16"
          type="image/svg+xml"
        >
          <img
            src="/src/assets/images/icon-board.png"
            srcset="/src/assets/images/icon-board.svg"
          />
        </object>
        {{ item }}
      </div>
    </div>
    <div class="sidebar__theme">theme</div>
    <div class="sidebar__hide">hide</div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const boardList = ["Plateform Launch", "Marketing Plan", "Roadmap"];
    let currentBoard = ref(0);

    const boardListLength = computed(() => {
      return boardList.length;
    });
    return { boardList, boardListLength, currentBoard };
  },
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;

.sidebar {
  background-color: $white;
  border-right: 1px solid $border-color;
  width: 300px;
  height: 85%;
  float: left;
  &__list {
    font: $heading-m;
    &__title {
      padding: 5px;
      color: $medium_grey;
    }
    &__item {
      color: $medium-grey;
      padding: 5px;
      margin-right: 20px;
      & > img {
        height: 16px;
        float: left;
        margin-right: 5px;
      }
      &--current {
        background-color: $main-purple;
        color: $white;
        border-radius: 0px 100px 100px 0px;
        & > img {
          color: $white;
        }
      }
    }
  }
}
</style>
