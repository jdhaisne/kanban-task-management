import { defineStore } from "pinia";
import { computed, ref } from "vue";
import dataBoards from "../assets/data/data.json";

export const useBoardsStore = defineStore("boards", () => {
  const boards = ref({});
  const currentIndex = ref(0);

  const getCurrentBoard = computed(() => {
    return boards.value[currentIndex.value];
  });
  const isBoardEmpty = computed(() => {
    if (boards.value[currentIndex.value].columns.length) return false;
    return true;
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
  };
});
