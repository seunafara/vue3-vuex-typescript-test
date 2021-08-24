import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/app.css";

const app = createApp(App);

app.config.globalProperties.$store = store;

app
  .use(store)
  .use(router)
  .mount("#app");
