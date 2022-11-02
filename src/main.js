import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/scss/index.scss";

import KBoardForm from "./components/KBoardForm.vue";
import KButton from "./components/KButton.vue";
import KCheckbox from "./components/KCheckbox.vue";
import KColumn from "./components/KColumn.vue";
import KColumnInput from "./components/KColumnInput.vue";
import KDeleteModal from "./components/KDeleteModal.vue";
import KDropdown from "./components/KDropdown.vue";
import KHeaderBar from "./components/KHeaderBar.vue";
import KModal from "./components/KModal.vue";
import KSideBar from "./components/KSideBar.vue";
import KSubtaskForm from "./components/KSubtaskForm.vue";
import KSwitch from "./components/KSwitch.vue";
import KTask from "./components/KTask.vue";
import KTaskForm from "./components/KTaskForm.vue";
import KTaskModal from "./components/KTaskModal.vue";
import KTextArea from "./components/KTextArea.vue";
import KTextField from "./components/KTextField.vue";
import KThemeSlider from "./components/KThemeSlider.vue";
import KUpdateTask from "./components/KUpdateTask.vue";
import KViewStatus from "./components/KViewStatus.vue";
import KViewSubtasks from "./components/KViewSubtasks.vue";
import KViewTask from "./components/KViewTask.vue";

import dataBoards from "./assets/data/data.json";

import router from "./router";
import App from "./App.vue";
import { useBoardsStore } from "./stores/boards";

const pinia = createPinia();
const app = createApp(App);

app
  .component("KBoardForm", KBoardForm)
  .component("KButton", KButton)
  .component("KCheckbox", KCheckbox)
  .component("KColumn", KColumn)
  .component("KColumnInput", KColumnInput)
  .component("KDeleteModal", KDeleteModal)
  .component("KDropdown", KDropdown)

  .component("KHeaderBar", KHeaderBar)
  .component("KModal", KModal)
  .component("KSideBar", KSideBar)
  .component("KSubtaskForm", KSubtaskForm)
  .component("KSwitch", KSwitch)
  .component("KTask", KTask)
  .component("KTaskForm", KTaskForm)
  .component("KTaskModal", KTaskModal)
  .component("KTextArea", KTextArea)
  .component("KTextField", KTextField)
  .component("KThemeSlider", KThemeSlider)
  .component("KUpdateTask", KUpdateTask)
  .component("KViewStatus", KViewStatus)
  .component("KViewSubtasks", KViewSubtasks)
  .component("KViewTask", KViewTask)

  .use(pinia);

const boardsStore = useBoardsStore();
boardsStore.setBoards(dataBoards.boards);

app.use(router).mount("#app");
