<template>
  <Teleport to="body">
    <div class="modal__behind" @click.self="behindClick">
      <div
        class="modal"
        :class="{ 'modal--dark': responsiveStore.isDarkTheme }"
        :style="modalStyle"
      >
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { computed } from "vue";
import { useResponsiveStore } from "../stores/responsive.js";

const props = defineProps({
  top: {
    type: String,
    default: "",
  },
  left: {
    type: String,
    default: "",
  },
  transform: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["behindClick"]);
const responsiveStore = useResponsiveStore();

const modalStyle = computed(() => {
  let style = {
    top: "",
    left: "",
    transform: "",
  };
  if (props.left) style.left = props.left;
  if (props.top) style.top = props.top;
  if (props.transform) style.transform = props.transform;
  return style;
});

const behindClick = () => {
  emit("behindClick");
};
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;

.modal {
  // width: 70%;
  // max-width: 300px;
  padding: 1rem;
  min-height: 200px;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  background-color: white;
  border-radius: 8px;
  &__behind {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
  }
  &--dark {
    background-color: $dark-grey;
  }
}
</style>
