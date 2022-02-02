import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const app = createApp(App);
const head = createHead();

app.use(createPinia()).use(router).use(head);

app.mount("#app");
