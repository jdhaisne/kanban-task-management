import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/scss/index.scss";

import KButton from "./components/KButton.vue";
import KCheckbox from "./components/KCheckbox.vue";
import KDropdown from "./components/KDropdown.vue";
import KHeaderBar from "./components/KHeaderBar.vue";
import KSideBar from "./components/KSideBar.vue";
import KSwitch from "./components/KSwitch.vue";
import KTextField from "./components/KTextField.vue";
import KThemeSlider from "./components/KThemeSlider.vue";

import router from "./router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app
  .component("KButton", KButton)
  .component("KCheckbox", KCheckbox)
  .component("KDropdown", KDropdown)
  .component("KHeaderBar", KHeaderBar)
  .component("KSideBar", KSideBar)
  .component("KSwitch", KSwitch)
  .component("KTextField", KTextField)
  .component("KThemeSlider", KThemeSlider)

  .use(pinia)
  .use(router)
  .mount("#app");
