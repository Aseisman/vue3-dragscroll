import { createApp } from "vue";
import App from "./App.vue";
import vue3Dragscroll from "../index";

const app = createApp(App);
app.use(vue3Dragscroll);
app.mount("#app");
