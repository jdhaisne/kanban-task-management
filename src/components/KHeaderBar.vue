<template>
  <div class="headerBar">
    <div class="headerBar__logo__wrapper">
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="/src/assets/images/logo-dark.svg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/images/logo-mobile.svg"
        />
        <img
          class="headerBar__logo"
          src="/src/assets/images/logo-mobile.svg"
          alt="kanban logo"
        />
      </picture>
    </div>
    <div class="headerBar__title__wrapper">
      <h1
        v-if="responsiveStore.getScreenType != 'small'"
        class="headerBar__title"
      >
        {{ pageTitle }}
      </h1>
      <h1 v-else class="headerBar__title" @click="toggleModal">
        {{ pageTitle }}
        <img
          v-if="!isModalVisible"
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
    <div class="headerBar__right">
      <KButton
        v-if="responsiveStore.getScreenType != 'small'"
        class="headerBar__right__button"
        t="48"
        :width="164"
      >
        <img
          src="/src/assets/images/icon-add-task-mobile.svg"
          alt="plus sign"
        />
        Add New Task</KButton
      >
      <KButton
        v-else
        class="headerBar__right__button"
        t="48"
        :width="48"
        :height="32"
      >
        <img
          src="/src/assets/images/icon-add-task-mobile.svg"
          alt="plus sign"
        />
      </KButton>
      <div class="headerBar__right__menu__wrapper">
        <img
          class="headeBar__right__menu"
          src="/src/assets/images/icon-vertical-ellipsis.svg"
        />
      </div>
    </div>
    <div
      class="modal"
      v-if="isModalVisible && responsiveStore.getScreenType == 'small'"
    >
      <KSideBar isInModal> </KSideBar>
    </div>
    <!-- <div class="modal" v-if="isModalVisible">
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

<script>
import { computed, onMounted, onUnmounted, ref } from "vue";
import KButton from "./KButton.vue";
import KSideBar from "./KSideBar.vue";
import { useResponsiveStore } from "/src/stores/responsive.js";
export default {
  props: {
    pageTitle: {
      type: String,
      default: "unnamed",
    },
  },
  setup() {
    const responsiveStore = useResponsiveStore();
    const boardList = ["Plateform Launch", "Marketing Plan", "Roadmap"];
    const isModalVisible = ref(false);

    const currentBoard = ref(0);

    const boardListLength = computed(() => {
      return boardList.length;
    });
    const toggleModal = function (event) {
      console.log("toggle", event);
      isModalVisible.value = !isModalVisible.value;
    };
    const closeModal = function (event) {
      console.log("close", event);
      if (
        isModalVisible.value &&
        !event.target.classList.contains("headerBar__title") &&
        !event.target.parentNode.classList.contains("headerBar__title")
      )
        isModalVisible.value = false;
    };

    // onMounted(() => {
    //   window.addEventListener("click", closeModal);
    // });
    // onUnmounted(() => {
    //   window.removeEventListener("click", closeModal);
    // });

    return {
      responsiveStore,
      isModalVisible,
      toggleModal,
      boardList,
      currentBoard,
      boardListLength,
    };
  },
  components: { KButton, KSideBar },
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.headerBar {
  background-color: $white;
  display: flex;
  height: 10%;
  &__logo {
    width: 25px;
    margin: auto 15px;

    &__wrapper {
      height: 100%;
      display: flex;
      & > picture {
        display: flex;
      }
      @include respond-to("medium") {
        width: 300px;
        border-right: 1px solid $border-color;
      }
    }
  }
  &__title {
    font: $heading-l;
    margin: auto 0;
    &__wrapper {
      display: flex;
      height: 100%;
      flex-grow: 1;
      @include respond-to("medium") {
        border-bottom: 1px solid $border-color;
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
      border-bottom: 1px solid $border-color;
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
  }
}
.modal {
  width: 80%;
  height: 40%;
  position: absolute;
  top: 12%;
  left: 10%;
  background-color: white;
  border-radius: 8px;
}
</style>
