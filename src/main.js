import { createApp } from "vue";
import { createPinia } from "pinia";
/* import font awesome icon component */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faBook, faBars, faDownload, faSignIn, faUpload, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import axios from "axios";
import "flowbite";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://sman1rawamerta.my.id";
library.add(faHome, faBook, faBars, faDownload, faSignIn, faUpload, faSignOut);
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueSweetalert2);
app.component("fa", FontAwesomeIcon);
app.component("EasyDataTable", Vue3EasyDataTable);

app.mount("#app");
