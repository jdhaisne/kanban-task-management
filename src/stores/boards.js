import { defineStore } from "pinia";
import { computed, ref } from "vue";
import dataBoards from "../assets/data/data.json";
import { uniqueId } from "lodash";

export const useBoardsStore = defineStore("boards", () => {
  const boards = ref([]);
  const currentIndex = ref(0);
  const currentColumnIndex = ref(0);
  const currentTaskIndex = ref(0);

  const createBoard = (newBoard) => {
    boards.value.push(newBoard);
  };

  const addColumn = function (name) {
    if (boards.value[currentIndex.value]) {
      boards.value[currentIndex.value].columns.push({ name: name, tasks: [] });
    }
  };

  const deleteBoard = (boardIndex) => {
    boards.value.splice(boardIndex, 1);
  };

  const getCurrentBoard = computed(() => {
    return boards.value[currentIndex.value];
  });
  const getCurrentColumn = computed(() => {
    return boards.value[currentIndex.value].columns[currentColumnIndex.value];
  });

  const getCurrentTask = computed(() => {
    return boards.value[currentIndex.value].columns[currentColumnIndex.value]
      .tasks[currentTaskIndex.value];
  });
  const isBoardEmpty = computed(() => {
    if (
      boards.value[currentIndex.value] &&
      boards.value[currentIndex.value].columns.length
    )
      return false;
    return true;
  });

  const getNbBoards = computed(() => {
    if (boards.value) return boards.value.length;
    return 0;
  });

  const getStatusList = computed(() => {
    return boards.value[currentIndex.value].columns.map((col) => col.name);
  });

  const setBoards = (data) => {
    boards.value = data;
  };

  const moveTaskTo = (taskIndex, oldIndex, newIndex) => {
    boards.value[currentIndex.value].columns[newIndex].tasks.push(
      boards.value[currentIndex.value].columns[oldIndex].tasks[taskIndex]
    );
    boards.value[currentIndex.value].columns[oldIndex].tasks.splice(
      taskIndex,
      1
    );
  };

  return {
    boards,
    setBoards,
    currentIndex,
    getCurrentBoard,
    isBoardEmpty,
    createBoard,
    deleteBoard,
    getNbBoards,
    addColumn,
    getStatusList,
    moveTaskTo,
  };
});
