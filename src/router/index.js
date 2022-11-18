import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KisiKisi from "../views/DaftarKisiKisi.vue";
import UploadKisiKisi from "../views/UploadKisiKisi.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/daftar-kisi-kisi",
      name: "daftarKisiKisi",
      component: KisiKisi,
    },
    {
      path: "/upload-kisi-kisi",
      name: "uploadKisiKisi",
      component: UploadKisiKisi,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
