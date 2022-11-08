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
        <router-link to="/download" class="nav-link"><fa icon="download" size="xl" class="menu-icon" />Unduh Kisi-kisi</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: "top-0",
      stickyMenuBar: "",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.stickyMenu);
    if (window.innerWidth > 991) {
      this.stickyMenuBar = "relative";
    }
  },
  unmounted() {
    window.addEventListener("scroll", this.stickyMenu);
  },
  methods: {
    toggleMenu() {
      if (this.showMenu == "top-0") {
        this.showMenu = "-top-[130%]";
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
  },
};
</script>
