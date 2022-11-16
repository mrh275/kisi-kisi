import { createApp } from "vue";
import { createPinia } from "pinia";
/* import font awesome icon component */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faBook, faBars, faDownload, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import axios from "axios";
import "flowbite";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000/";
library.add(faHome, faBook, faBars, faDownload, faSignIn);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("fa", FontAwesomeIcon);
app.component("EasyDataTable", Vue3EasyDataTable);

app.mount("#app");
