<template>
  <div class="form">
    <h2 class="form__heading">{{ title }}</h2>
    <div class="form__input">
      <label class="form__label" for="boardName">Name</label>
      <KTextField
        id="boardName"
        :modelValue="newBoard.name"
        @update:modelValue="(newValue) => (newBoard.name = newValue)"
        :placeholder="'e.g Web Design'"
      ></KTextField>
    </div>

    <KColumnInput
      :columns="newBoard.columns"
      @update:name="onUpdate"
      @add:column="onAdd"
      @delete:column="onDelete"
    ></KColumnInput>
    <KButton @click="submit">
      {{ buttonText }}
    </KButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  board: {
    type: Object,
    default: () => ({ name: "", columns: [] }),
  },
  title: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:board"]);

const newBoard = JSON.parse(JSON.stringify(props.board));

const onUpdate = (newName, index) => {
  newBoard.columns[index].name = newName;
};
const onAdd = () => {
  console.log("add");
  newBoard.columns.push({ name: "", tasks: [] });
};
const onDelete = (index) => {
  newBoard.columns.splice(index, 1);
};

const submit = () => {
  console.log("submit");
  emit("update:board", newBoard);
};
</script>

<style lang="scss" scoped></style>
