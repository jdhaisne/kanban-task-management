<template>
  <div class="textarea__wrapper">
    <input
      class="textarea"
      type="textarea"
      v-model="currentValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelvalue"]);

const currentValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>

<style lang="scss" scoped></style>
