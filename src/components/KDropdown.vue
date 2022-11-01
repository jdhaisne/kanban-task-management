<template>
  <div class="dropdown">
    <div
      class="dropdown__choice"
      :class="{ 'dropdown__choice--active': isVisible }"
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
        <div class="dropdown__list__item" @click="onClickItem()">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const isVisible = ref(false);

const onClickChoice = () => {
  if (!props.isDisabled) isVisible.value = !isVisible.value;
};

const onClickItem = () => {
  if (!isDisabled) $emit("update:selectedIndex", index);
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.dropdown {
  font: $heading-m;
  margin: 5px;
  border-radius: 4px;
  //   position: relative;
  &__choice {
    padding: 10px 4px;
    max-width: 350px;
    min-height: 40px;
    border: 1px solid $medium-grey;
    border-radius: 4px;
    &--active {
      border-color: $main-purple-hover;
    }
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
}
</style>
