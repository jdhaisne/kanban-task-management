import { createApp } from "vue";
import "./assets/scss/index.scss";
import KButton from "./components/KButton.vue";
import KCheckbox from "./components/KCheckbox.vue";
import KTextField from "./components/KTextField.vue";
import KDropdown from "./components/KDropdown.vue";
import KHeaderBar from "./components/KHeaderBar.vue";
import KSideBar from "./components/KSideBar.vue";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);

app
  .component("KButton", KButton)
  .component("KCheckbox", KCheckbox)
  .component("KTextField", KTextField)
  .component("KDropdown", KDropdown)
  .component("KHeaderBar", KHeaderBar)
  .component("KSideBar", KSideBar)
  .use(router)
  .mount("#app");
