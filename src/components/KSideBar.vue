<template>
  <div class="sidebar" :class="{ 'sidebar--visible': isInModal }">
    <div class="sidebar__list">
      <h2 class="sidebar__list__title">All Boards({{ boardListLength }})</h2>
      <div
        class="sidebar__list__item"
        :class="{ 'sidebar__list__item--current': index == currentBoard }"
        v-for="(item, index) in boardList"
        :key="index"
      >
        <span
          class="sidebar__list__item__icon icon icon--very-small icon-board"
          :class="{ 'icon--white': index == currentBoard }"
        >
        </span>

        {{ item }}
      </div>
      <div class="sidebar__list__item sidebar__list__item--btn">
        <span
          class="sidebar__list__item__icon icon icon--very-small icon--purple icon-board"
        ></span>
        + Create New Board
      </div>
    </div>
    <KThemeSlider class="sidebar__theme"></KThemeSlider>
    <div class="sidebar__hide">hide</div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: {
    isInModal: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
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
@use "src/assets/scss/_mixins.scss" as *;

.sidebar {
  display: none;
  &--visible {
    display: initial;
  }
  @include respond-to("medium") {
    display: initial;
    background-color: $white;
    border-right: 1px solid $border-color;
    width: 300px;
    height: 90%;
    float: left;
  }

  &__list {
    font: $heading-m;
    &__title {
      margin: 15px;

      color: $medium_grey;
    }
    &__item {
      color: $medium-grey;
      padding: 10px;
      margin-right: 20px;
      &__icon {
        float: left;
        margin: auto 10px;
      }
      &--btn {
        color: $main-purple;
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
