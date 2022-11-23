<script>
export default {
  data() {
    return {
      dateNow: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="flex flex-col px-6 py-6 mb-20 text-center text-white bg-gray-700 xl:mb-0 footer">
    <span class="copyright">Copyright {{ dateNow }} ©️ SMAN 1 Rawamerta. All Right Reserved.</span>
    <span>v1.1.2 Made by <a href="https://muhamadramdani.my.id" target="_blank" class="hover:text-[#0099ff] border-b border-dotted">dNezast</a>.</span>
  </footer>
</template>
