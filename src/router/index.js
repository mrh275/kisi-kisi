import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import KisiKisi from "../views/DaftarKisiKisi.vue";
import DownloadKisiKisi from "../views/DownloadKisiKisi.vue";

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
      path: "/login",
      name: "downloadKisiKisi",
      component: DownloadKisiKisi,
    },
  ],
});

export default router;
