<template>
  <header class="header-vue" :class="stickyMenuBar">
    <div class="brand-wrapper">
      <a href="/" class="brand-link">
        <img src="../../assets/logo.png" alt="Logo Sekolah" class="brand-img" />
      </a>
      <a href="/" class="brand-link">SMA Negeri 1 Rawamerta</a>
      <button type="button" class="toggle-menu"><fa icon="bars" size="xl" @click="toggleMenu()" /></button>
    </div>

    <ul class="nav-menu" :class="showMenu" v-on:scroll="stickyMenu()">
      <li class="nav-list">
        <router-link to="/" class="nav-link"><fa icon="home" size="xl" class="menu-icon" />Beranda</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/daftar-kisi-kisi" class="nav-link"><fa icon="book" size="xl" class="menu-icon" />List Kisi-kisi</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/upload-kisi-kisi" class="nav-link"><fa icon="upload" size="xl" class="menu-icon" />Upload</router-link>
      </li>
      <li class="nav-list" v-if="!token">
        <router-link to="/login" class="nav-link"><fa icon="sign-in" size="xl" class="menu-icon" />Login</router-link>
      </li>
      <li class="nav-list" v-else>
        <a href="/logout" @click="logout" class="nav-link"><fa icon="sign-out" size="xl" class="menu-icon" />Logout</a>
      </li>
    </ul>
  </header>
</template>

<script>
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      showMenu: "top-0",
      stickyMenuBar: "",
      token: sessionStorage.token,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.stickyMenu);
    if (window.innerWidth > 1280) {
      this.stickyMenuBar = "relative";
    }
  },
  unmounted() {
    window.addEventListener("scroll", this.stickyMenu);
  },
  methods: {
    toggleMenu() {
      if (this.showMenu == "top-0") {
        this.showMenu = "-top-[200%]";
      } else {
        this.showMenu = "top-0";
      }
    },
    stickyMenu(event) {
      if (window.innerWidth > 991) {
        if (window.pageYOffset > 0) {
          this.stickyMenuBar = "fixed";
          document.querySelector("main").style.paddingTop = "104.266px";
        } else {
          this.stickyMenuBar = "relative";
          document.querySelector("main").style.paddingTop = "32px";
        }
      }
    },
    logout(e) {
      e.preventDefault();
      const url = "/api/logout";
      const token = sessionStorage.token;
      sessionStorage.removeItem("token");
      sessionStorage.clear();

      axios
        .get(url, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          window.location.href = "/login";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
