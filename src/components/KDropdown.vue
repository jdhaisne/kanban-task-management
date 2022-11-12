<template>
  <div
    class="dropdown"
    :class="{ 'dropdown--dark': responsiveStore.isDarkTheme }"
  >
    <div
      class="dropdown__choice"
      :class="{
        'dropdown__choice--active': isVisible,
        'dropdown__choice--dark': responsiveStore.isDarkTheme,
      }"
      @click="onClickChoice()"
    >
      {{ items[selectedIndex] }}
      <i v-if="!isDisabled" class="dropdown__icon fa-solid fa-chevron-down"></i>
    </div>
    <div
      class="dropdown__list"
      :class="{ 'dropdown__list--visible': isVisible }"
    >
      <div v-for="(item, index) in items" :key="index">
        <div class="dropdown__list__item" @click="onClickItem(index)">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useResponsiveStore } from "../stores/responsive";

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  selectedIndex: { type: Number },
  isDisabled: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:selectedIndex"]);

const responsiveStore = useResponsiveStore();

const isVisible = ref(false);

const onClickChoice = () => {
  if (!props.isDisabled) isVisible.value = !isVisible.value;
};

const onClickItem = (index) => {
  if (!props.isDisabled) emit("update:selectedIndex", index);
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.dropdown {
  font: $body-l;
  margin: 5px;
  border-radius: 4px;
  //   position: relative;
  &__choice {
    padding: 10px 4px;
    min-height: 40px;
    border: 1px solid rgba($medium-grey, 0.25);
    border-radius: 4px;
    &--active {
      border-color: $main-purple-hover;
    }
    // &--dark {
    //   border-color: rgba(130, 143, 163, 0.25);
    // }
  }
  &__icon {
    float: right;
    color: $main-purple-hover;
  }
  &__list {
    color: $medium-grey;
    padding: 4px;
    display: none;
    &--visible {
      display: block;
    }
  }
  &--dark {
    color: $white;
  }
}
</style>
