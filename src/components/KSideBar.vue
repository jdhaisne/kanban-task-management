<template>
  <div
    class="sidebar"
    :class="{
      'sidebar--visible': isInModal,
      'sidebar--dark': responsiveStore.isDarkTheme,
      'sidebar--hidden': responsiveStore.isSidebarHidden,
    }"
  >
    <div
      class="sidebar__list"
      :class="{ 'sidebar__list--hidden': responsiveStore.isSidebarHidden }"
    >
      <h2 class="sidebar__list__title">All Boards({{ boardListLength }})</h2>
      <div
        class="sidebar__list__item"
        :class="{
          'sidebar__list__item--current': index == boardsStore.currentIndex,
        }"
        v-for="(board, index) in boardsStore.boards"
        :key="index"
        @click="boardsStore.currentIndex = index"
      >
        <span
          class="sidebar__list__item__icon icon icon--very-small icon-board"
          :class="{ 'icon--white': index == boardsStore.currentIndex }"
        >
        </span>

        {{ board.name }}
      </div>
      <div class="sidebar__list__item sidebar__list__item--btn">
        <span
          class="sidebar__list__item__icon icon icon--very-small icon--purple icon-board"
        ></span>
        + Create New Board
      </div>
    </div>
    <div
      v-if="!isInModal"
      class="sidebar__bottom"
      :class="{ 'sidebar__bottom--hidden': responsiveStore.isSidebarHidden }"
    >
      <KThemeSlider class="sidebar__theme"></KThemeSlider>
      <div
        class="sidebar__hide"
        @click="responsiveStore.setSidebarHidden(true)"
      >
        <img
          class="sidebar__hide__icon"
          src="/src/assets/images/icon-hide-sidebar.svg"
          height="16"
          width="18"
        />Hide Sidebar
      </div>
    </div>
    <template v-else>
      <KThemeSlider class="sidebar__theme"></KThemeSlider>
    </template>
    <template v-if="responsiveStore.isSidebarHidden">
      <div
        class="sidebar__show"
        @click="responsiveStore.setSidebarHidden(false)"
      >
        <!-- <span
          class="sidebar__hide__icon icon icon--very-small icon-show-sidebar"
        ></span> -->
        <img
          class="sidebar__show__icon"
          src="/src/assets/images/icon-show-sidebar.svg"
          height="10"
          width="16"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";
import { useBoardsStore } from "../stores/boards";
export default {
  props: {
    isInModal: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const boardList = ["Plateform Launch", "Marketing Plan", "Roadmap"];
    const responsiveStore = useResponsiveStore();
    const boardsStore = useBoardsStore();
    let currentBoard = ref(0);

    const boardListLength = computed(() => {
      return boardList.length;
    });
    return {
      boardList,
      boardListLength,
      currentBoard,
      responsiveStore,
      boardsStore,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;

.sidebar {
  display: none;
  height: 100%;

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
    &--hidden {
      display: none;
    }
  }
  &__bottom {
    margin-top: auto;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    &--hidden {
      display: none;
    }
  }
  &__hide {
    margin: 0 auto;
    color: $medium-grey;
    font: $heading-m;
    cursor: pointer;
    &__icon {
      float: left;
      margin-right: 5px;
    }
  }
  &__show {
    position: absolute;
    left: 0;
    bottom: 10%;
    background: $main-purple;
    padding: 5px;
    border-radius: 0px 100px 100px 0px;
    width: 50px;
    height: 48px;
    display: flex;
    &__icon {
      margin: auto 0;
      margin-left: 6px;
    }
  }
  @include respond-to("medium") {
    display: flex;
    background-color: $white;
    flex-direction: column;
    width: 300px;
    float: left;
    border-right: 1px solid $lines-light;
  }

  &--dark {
    background-color: $dark-grey;
    @include respond-to("medium") {
      border-right: 1px solid $lines;
    }
  }
  &--visible {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: none;
  }
  &--hidden {
    width: 0px;
  }
  @include respond-to("medium") {
    height: auto;
  }
}
</style>
