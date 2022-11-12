<template>
  <div class="task-form form">
    <h3
      class="form__heading"
      :class="{ 'form__heading--dark': responsiveStore.isDarkTheme }"
    >
      {{ title }}
    </h3>
    <div class="form__input">
      <label
        class="form__label"
        :class="{ 'form__text--dark': responsiveStore.isDarkTheme }"
        for="taskTitle"
        >Title</label
      >
      <KTextField
        id="taskTitle"
        :modelValue="newTask.title"
        @update:modelValue="
          (newValue) => {
            newTask.title = newValue;
            formError.titleError = ' ';
          }
        "
        :placeholder="'e.g. Take coffe break'"
        :errorMessage="formError.titleError"
      >
      </KTextField>
    </div>
    <div class="form__input">
      <label
        class="form__label"
        :class="{ 'form__text--dark': responsiveStore.isDarkTheme }"
        for="taskDescription"
        >Description</label
      >
      <KTextArea
        id="taskDescription"
        :modelValue="newTask.description"
        @update:modelValue="(newValue) => (newTask.description = newValue)"
        :placeholder="'e.g. It\'s always good to take a break. This 15 minute break will  recharge the batteries a little.'"
      ></KTextArea>
    </div>

    <KSubtaskForm
      :subtasks="newTask.subtasks"
      @update:subtask="updateSubstask"
      @add:subtask="addSubtask"
      @delete:subtask="deleteSubtask"
    ></KSubtaskForm>
    <KViewStatus
      :statusIndex="newStatus"
      @update:status="(newValue) => (newStatus = newValue)"
    >
    </KViewStatus>
    <KButton @click="onSubmit">{{ buttonText }} </KButton>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useBoardsStore } from "../stores/boards";
import { useResponsiveStore } from "../stores/responsive";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  task: {
    type: Object,
    default: {
      title: "",
      description: "",
      subtasks: [],
    },
  },
});
const emit = defineEmits(["update:task"]);

const responsiveStore = useResponsiveStore();
const colIndex = inject("colIndex", 0);
const newTask = ref(JSON.parse(JSON.stringify(props.task)));
const newStatus = ref(colIndex);
const formError = ref({ titleError: "", descriptionError: "" });
// const newSubtasks = ref(Array.from(props.task.subtasks));

const updateSubstask = (newSubtask, index) => {
  newTask.value.subtasks[index].title = newSubtask;
};
const addSubtask = () => {
  newTask.value.subtasks.push({ title: "", isCompleted: false });
};

const deleteSubtask = (index) => {
  newTask.value.subtasks.splice(index, 1);
};

const onUpdateModelValue = (newValue) => {};

const onSubmit = () => {
  // newTask.value.subtasks = newSubtasks.value;
  let hasError = false;
  console.log(newTask);
  if (!newTask.value.title) {
    hasError = true;
    formError.value.titleError = "error";
  }
  if (!hasError) emit("update:task", newTask.value, newStatus.value);
};

// const colIndex = inject("colIndex");
// const taskIndex = inject("taskIndex");

// const boardsStore = useBoardsStore();

// const updatedTask = ref(
//   boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex]
// );
</script>

<style lang="scss" scoped>
@use "../assets/scss/_variables.scss" as *;
.form {
  &__heading {
    &--dark {
      color: $white;
    }
  }
}
</style>
