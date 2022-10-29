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
      <h2 class="sidebar__list__title">
        All Boards({{ boardsStore.getNbBoards }})
      </h2>
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
      <div
        @click="createNewBoard"
        class="sidebar__list__item sidebar__list__item--btn"
      >
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
      <KModal v-if="isCreateBoardModalVisible">
        <h2>Add New Board</h2>
        <form>
          <label for="boardName">Board Name</label>
          <KTextField
            id="boardName"
            placeholder="e.g web Design"
            :modelValue="newBoard.name"
            @update:model.value="(newValue) => (newBoard.name = newValue)"
          >
          </KTextField>
          <template v-for="(column, index) in newBoard.columns" :key="index">
            <label :for="`column-${index}`">Board Name</label>
            <KTextField
              :id="`column-${index}`"
              placeholder="e.g To Do"
              :modelValue="newBoard.columns[index].name"
              @update:model.value="
                (newValue) => (newBoard.columns[index].name = newValue)
              "
            >
            </KTextField
          ></template>
          <KButton> </KButton></form
      ></KModal>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";
import { useBoardsStore } from "../stores/boards";

const props = defineProps({
  isInModal: {
    type: Boolean,
    default: false,
  },
});

const responsiveStore = useResponsiveStore();
const boardsStore = useBoardsStore();

const isCreateBoardModalVisible = ref(false);

const newBoard = ref({
  name: "",
  columns: [],
});

const createNewBoard = () => {
  const label = `board-${boardsStore.boards.length}`;

  boardsStore.createBoard(label);
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
    min-width: 300px;
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
    min-width: 0px;
  }
  @include respond-to("medium") {
    height: auto;
  }
}
</style>
