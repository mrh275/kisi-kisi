<script setup>
import { RouterLink, RouterView } from "vue-router";
import HeaderVue from "./components/layouts/Header.vue";
import FooterVue from "./components/layouts/Footer.vue";
</script>

<template>
  <header-vue></header-vue>
  <RouterView />
  <footer-vue></footer-vue>
</template>

<style scoped></style>
