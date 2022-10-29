import { defineStore } from "pinia";
import { computed, ref } from "vue";
import dataBoards from "../assets/data/data.json";
import { uniqueId } from "lodash";

export const useBoardsStore = defineStore("boards", () => {
  const boards = ref([]);
  const currentIndex = ref(0);

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

  const setBoards = function (data) {
    boards.value = data;
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
  };
});
