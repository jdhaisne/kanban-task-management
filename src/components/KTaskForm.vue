<template>
  <div class="task-form">
    <h3>{{ title }}</h3>
    <label for="taskTitle">Title</label>
    <KTextField
      id="taskTitle"
      :modelValue="newTask.title"
      @update:modelValue="(newValue) => (newTask.title = newValue)"
    >
    </KTextField>
    <label for="taskDescription"></label>
    <KTextArea
      id="taskDescription"
      :modelValue="newTask.description"
      @update:modelValue="(newValue) => (newTask.description = newValue)"
    ></KTextArea>
    <KSubtaskForm
      :subtasks="newTask.subtasks"
      @update:subtask="updateSubstask"
      @add:subtask="addSubtask"
      @delete:subtask="deleteSubtask"
    ></KSubtaskForm>
    <KViewStatus @update:status=""> </KViewStatus>
    <KButton @click="onSubmit">{{ buttonText }} </KButton>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import { useBoardsStore } from "../stores/boards";

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

const newTask = ref(Object.assign({}, props.task));
// const newSubtasks = ref(Array.from(props.task.subtasks));

const emit = defineEmits(["update:task"]);

const updateSubstask = (newSubtask, index) => {
  newTask.value.subtasks.value[index].title = newSubtask;
};
const addSubtask = () => {
  newTask.value.subtasks.value.push({ title: "", isCompleted: false });
};

const deleteSubtask = (index) => {
  newTask.value.subtasks.value.splice(index, 1);
};

const updateStatus = () => {};

const onSubmit = () => {
  newTask.value.subtasks = newSubtasks.value;
  emit("update:task", newTask.value);
};

// const colIndex = inject("colIndex");
// const taskIndex = inject("taskIndex");

// const boardsStore = useBoardsStore();

// const updatedTask = ref(
//   boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex]
// );
</script>

<style lang="scss" scoped></style>
