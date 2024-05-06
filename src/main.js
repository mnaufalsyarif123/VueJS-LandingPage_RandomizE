import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import LoginComponent from './components/LoginComponent.vue';


createApp(App).use(router).mount("#app");

