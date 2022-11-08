<script>
import { ref } from "vue";
const searchValue = ref();
export default {
  data() {
    return {
      headers: [
        { text: "Mata Pelajaran", value: "mapel" },
        { text: "Kelas", value: "kelas" },
        { text: "Status", value: "status" },
        { text: "Unduh", value: "unduh" },
      ],
      items: [
        { mapel: "Matematika", kelas: "10 IPA", status: "Sudah Upload" },
        { mapel: "Matematika", kelas: "10 IPS", status: "Sudah Upload" },
        { mapel: "Matematika", kelas: "11 IPA", status: "Sudah Upload" },
        { mapel: "Matematika", kelas: "11 IPS", status: "Sudah Upload" },
        { mapel: "Matematika", kelas: "12 IPA", status: "Sudah Upload" },
        { mapel: "Matematika", kelas: "12 IPS", status: "Sudah Upload" },
      ],
      searchValue: searchValue,
    };
  },
};
</script>

<template>
  <main class="px-6 py-8 text-white bg-gray-800">
    <div class="mb-6 kisi-wrapper">
      <h2 class="text-xl font-semibold text-center kisi-title">
        Daftar Kisi-Kisi <br />
        Mata Pelajaran <br />
        Penilaian Akhir Semester 1 (PAS) <br />
        Tahun Pelajaran 2022/2023
      </h2>
    </div>

    <!-- Table Kisi -->
    <div class="px-2 py-4 text-gray-800 bg-white rounded-lg table-wrapper">
      <div class="mb-4 search-table-wrapper">
        <label for="searchInput">Cari </label>
        <input type="text" id="searchInput" class="border rounded-md outline-none focus:ring focus:ring-[#0099ff] px-2 ml-1 transition-all ease-in-out duration-200" v-model="searchValue" />
      </div>
      <easy-data-table class="table-mapel" buttons-pagination :headers="headers" :items="items" :rows-per-page="10" :rows-items="[10, 25, 50]" show-index :search-value="searchValue">
        <template #item-unduh="item">
          <div class="unduh-wrapper">
            <button class="btn btn-primary" @click="downloadMapel(item)">Unduh</button>
          </div>
        </template>
      </easy-data-table>
    </div>
  </main>
</template>

<style>
.table-mapel {
  --easy-table-header-font-size: 1rem;
}
</style>
