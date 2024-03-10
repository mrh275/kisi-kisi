<script>
export default {
  mounted() {
    document.title = "Home | Bank Kisi-kisi Ujian SMAN 1 Rawamerta";
  },
};
</script>

<template>
  <main class="px-6 py-8 text-white bg-gray-800">
    <div class="first-wrapper xl:flex xl:justify-between xl:mb-6">
      <div class="py-6 xl:pl-12 xl:py-12 greetings-wrapper xl:w-1/2">
        <h1 class="text-4xl font-bold xl:text-5xl">Selamat Datang!</h1>
        <h2 class="text-3xl font-bold xl:text-4xl">di Portal Kisi-Kisi Ujian</h2>
        <h3 class="text-2xl font-bold xl:text-3xl">SMAN 1 Rawamerta</h3>
      </div>
      <div class="my-8 splash-img-wrapper xl:w-1/2 xl:flex xl:justify-center xl:items-center">
        <img src="../assets/study.svg" alt="Studying" class="xl:w-3/4" />
      </div>
    </div>
    <div class="text-center second-wrapper list-kisi">
      <h3 class="mb-6 text-xl font-semibold text-center xl:text-3xl list-kisi-title">
        Daftar Kisi-Kisi <br />
        Mata Pelajaran
      </h3>
      <p class="text-justify xl:text-center xl:text-xl list-kisi-desc">Untuk melihat daftar kisi-kisi mata pelajaran apa saja yang sudah tersedia, silahkan klik tombol dibawah ini!</p>
      <a href="/daftar-kisi-kisi" class="inline-block my-6 bg-[#0099ff] hover:bg-[#0077ff] rounded-lg px-4 py-3 list-kisi-cta btn btn-primary">Daftar Kisi-kisi</a>
    </div>
  </main>
</template>
