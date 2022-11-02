<template>
  <div
    class="headerbar"
    :class="{ 'headerbar--dark': responsiveStore.isDarkTheme }"
  >
    <div
      class="headerbar__logo__wrapper"
      :class="{
        'headerbar__logo__wrapper--dark': responsiveStore.isDarkTheme,
        'headerbar__logo__wrapper--border': responsiveStore.isSidebarHidden,
      }"
    >
      <img
        v-if="
          responsiveStore.getScreenType != 'small' &&
          !responsiveStore.isDarkTheme
        "
        class="headerbar__logo"
        src="/src/assets/images/logo-dark.svg"
        alt="kanban logo dark"
      />
      <img
        v-else-if="responsiveStore.getScreenType != 'small'"
        class="headerbar__logo"
        src="/src/assets/images/logo-light.svg"
        alt="kanban logo light"
      />
      <img
        v-else
        class="headerbar__logo"
        src="/src/assets/images/logo-mobile.svg"
        alt="kanban logo"
      />
    </div>
    <div
      class="headerbar__title__wrapper"
      :class="{
        'headerbar__title__wrapper--dark': responsiveStore.isDarkTheme,
      }"
    >
      <h1
        v-if="responsiveStore.getScreenType != 'small'"
        class="headerbar__title"
      >
        {{ currentBoardTitle }}
      </h1>
      <h1 v-else class="headerbar__title" @click="openSidebarModal()">
        {{ currentBoardTitle }}
        <img
          v-if="!isSidebarModalVisible"
          src="/src/assets/images/icon-chevron-down.svg"
          alt="chevron down"
        />
        <img
          v-else
          src="/src/assets/images/icon-chevron-up.svg"
          alt="chevron up"
        />
      </h1>
    </div>
    <div
      class="headerbar__right"
      :class="{ 'headerbar__right--dark': responsiveStore.isDarkTheme }"
    >
      <KButton
        v-if="responsiveStore.getScreenType != 'small'"
        @click="openCreateTaskModal()"
        class="headerbar__right__button"
        :height="48"
        :width="164"
      >
        + Add New Task</KButton
      >
      <KButton
        v-else
        class="headerbar__right__button"
        :width="48"
        :height="32"
        @click="openCreateTaskModal()"
      >
        <span class="icon icon--very-small icon-add-task-mobile"></span>
      </KButton>
      <div
        class="headerbar__right__menu__wrapper"
        @click="openModalBoardMenu()"
      >
        <img
          class="headeBar__right__menu"
          src="/src/assets/images/icon-vertical-ellipsis.svg"
        />
      </div>
    </div>
    <KModal v-if="isSidebarModalVisible" @behind-click="closeSidebarModal()">
      <KSideBar isInModal></KSideBar>
    </KModal>
    <KModal
      v-if="isModalCreateTaskVisible"
      @behind-click="closeCreateTaskModal()"
    >
      <KTaskForm
        :title="'Add New Task'"
        :buttonText="'Create Task'"
        @update:task="createTask"
      >
      </KTaskForm>
    </KModal>
    <KModal
      v-if="isModalBoardMenuVisible"
      @behind-click="closeModalBoardMenu()"
    >
      <span>Edit Board</span>
      <span>Delete Board</span>
    </KModal>

    <!-- <div class="modal" v-if="isSidebarModalVisible">
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
          ></object>
          {{ item }}
        </div> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import KButton from "./KButton.vue";
import KSideBar from "./KSideBar.vue";
import { useResponsiveStore } from "/src/stores/responsive.js";
import { useBoardsStore } from "../stores/boards";
import KModal from "./KModal.vue";

const responsiveStore = useResponsiveStore();
const boardsStore = useBoardsStore();
const boardList = ["Plateform Launch", "Marketing Plan", "Roadmap"];
const isSidebarModalVisible = ref(false);
const isModalCreateTaskVisible = ref(false);
const isModalBoardMenuVisible = ref(false);
const currentBoard = ref(0);
const newTask = ref({
  title: "",
  desc: "",
  subTasks: [],
});

const boardListLength = computed(() => {
  return boardList.length;
});

const createTask = (newTask, statusIndex) => {
  boardsStore.addTask(newTask, statusIndex);
  isModalCreateTaskVisible.value = false;
};

const openSidebarModal = () => {
  isSidebarModalVisible.value = true;
};
const closeSidebarModal = function (event) {
  isSidebarModalVisible.value = false;
};

const openModalBoardMenu = () => {
  isModalBoardMenuVisible.value = true;
};
const closeModalBoardMenu = () => {
  isModalBoardMenuVisible.value = false;
};

const resetNewTask = () => {
  newTask.value = {
    title: "",
    desc: "",
    subTasks: [],
  };
};

const openCreateTaskModal = () => {
  resetNewTask();
  isModalCreateTaskVisible.value = true;
};

const closeCreateTaskModal = () => {
  isModalCreateTaskVisible.value = false;
};

const currentBoardTitle = computed(() => {
  if (boardsStore.getCurrentBoard) return boardsStore.getCurrentBoard.name;
  return "";
});
// onMounted(() => {
//   window.addEventListener("click", closeModal);
// });
// onUnmounted(() => {
//   window.removeEventListener("click", closeModal);
// });
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.headerbar {
  background-color: $white;
  display: flex;
  height: 64px;

  &__logo {
    width: 25px;
    margin: auto 15px;
    @include respond-to("medium") {
      width: initial;
    }

    &__wrapper {
      height: 100%;
      display: flex;
      & > picture {
        display: flex;
      }
      @include respond-to("medium") {
        width: 300px;
        border-right: 1px solid $lines-light;
      }
      &--border {
        border-bottom: 1px solid $lines-light;
      }
      &--dark {
        border: none;
        @include respond-to("medium") {
          border-right: 1px solid $lines;
          &.headerbar__logo__wrapper--border {
            border-bottom: 1px solid $lines;
          }
        }
      }
    }
  }
  &__title {
    font: $heading-l;
    cursor: pointer;
    margin: auto 0;
    margin-left: 20px;
    &__wrapper {
      display: flex;
      height: 100%;
      flex-grow: 1;
      @include respond-to("medium") {
        border-bottom: 1px solid $lines-light;
      }
      &--dark {
        @include respond-to("medium") {
          border-bottom: 1px solid $lines;
        }
      }
    }
    & > img {
      display: inline;
    }
  }
  &__right {
    height: 100%;
    display: flex;
    @include respond-to("medium") {
      border-bottom: 1px solid $lines-light;
    }
    margin-left: auto;
    &__button {
      margin: auto 10px;
      & > img {
        margin: auto;
      }
    }
    &__menu {
      width: 5px;

      &__wrapper {
        margin: auto 10px;
      }
    }
    &--dark {
      @include respond-to("medium") {
        border-bottom: 1px solid $lines;
      }
    }
  }
  &--dark {
    background-color: $dark-grey;
    color: $white;
  }
}
.modal {
  width: 70%;
  max-width: 300px;
  height: 48%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: auto;
  background-color: white;
  border-radius: 8px;
  &--dark {
    background-color: $dark-grey;
  }
}
</style>
