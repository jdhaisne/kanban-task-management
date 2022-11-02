<template>
  <div class="task-form">
    <h3>{{ title }}</h3>
    <label for="taskTitle">Title</label>
    <KTextField
      id="taskTitle"
      :modelValue="newTask.title"
      @update:modelValue="(newValue) => (newTask.title = newValue)"
      :placeholder="'e.g. Take coffe break'"
    >
    </KTextField>
    <label for="taskDescription"></label>
    <KTextArea
      id="taskDescription"
      :modelValue="newTask.description"
      @update:modelValue="(newValue) => (newTask.description = newValue)"
      :placeholder="'e.g. It\'s always good to take a break. This 15 minute break will  recharge the batteries a little.'"
    ></KTextArea>
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
const colIndex = inject("colIndex", 0);
const newTask = ref(Object.assign({}, props.task));
const newStatus = ref(colIndex);
// const newSubtasks = ref(Array.from(props.task.subtasks));

const emit = defineEmits(["update:task"]);

const updateSubstask = (newSubtask, index) => {
  newTask.value.subtasks[index].title = newSubtask;
};
const addSubtask = () => {
  newTask.value.subtasks.push({ title: "", isCompleted: false });
};

const deleteSubtask = (index) => {
  newTask.value.subtasks.splice(index, 1);
};

const updateStatus = () => {};

const onSubmit = () => {
  // newTask.value.subtasks = newSubtasks.value;

  emit("update:task", newTask.value, newStatus.value);
};

// const colIndex = inject("colIndex");
// const taskIndex = inject("taskIndex");

// const boardsStore = useBoardsStore();

// const updatedTask = ref(
//   boardsStore.getCurrentBoard.columns[colIndex].tasks[taskIndex]
// );
</script>

<style lang="scss" scoped></style>
