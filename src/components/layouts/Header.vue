<template>
  <header class="header">
    <div class="brand-wrapper">
      <a href="/" class="brand-link">
        <img src="../../assets/logo.png" alt="Logo Sekolah" class="brand-img" />
      </a>
      <a href="/" class="brand-link">SMA Negeri 1 Rawamerta</a>
      <button type="button"><fa icon="bars" size="xl" @click="toggleMenu()" /></button>
    </div>

    <ul class="nav-menu" :class="showMenu">
      <li class="nav-list">
        <router-link to="/" class="nav-link"><fa icon="home" size="xl" />Beranda</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/daftar-kisi-kisi" class="nav-link"><fa icon="book" size="xl" />List Kisi-kisi</router-link>
      </li>
      <li class="nav-list">
        <router-link to="/download" class="nav-link"><fa icon="download" size="xl" />Unduh Kisi-kisi</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMenu: "top-0",
    };
  },
  methods: {
    toggleMenu() {
      if (this.showMenu == "top-0") {
        this.showMenu = "-top-[130%]";
      } else {
        this.showMenu = "top-0";
      }
    },
  },
};
</script>
