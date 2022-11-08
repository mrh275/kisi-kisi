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
      items: [{ mapel: "Matematika", kelas: "10 IPA 1", status: "Terupload" }],
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
      <div class="mb-3 search-table-wrapper">
        <label for="search-field">Cari : </label>
        <input type="text" id="search-field" v-model="searchValue" class="border border-gray-800 rounded-md outline-none focus:ring focus:ring-offset-0 focus:ring-[#0099ff] transition-all duration-200 ease-in-out" />
      </div>
      <EasyDataTable table-class-name="table-mapel" :headers="headers" :items="items" :rows-per-page="10" :rows-items="[10, 25, 50]" :search-value="searchValue" show-index buttons-pagination empty-message="Data tidak ditemukan">
        <template #item-unduh="item">
          <div class="operation-wrapper">
            <img src="./images/delete.png" class="operation-icon" @click="deleteItem(item)" />
            <img src="./images/edit.png" class="operation-icon" @click="editItem(item)" />
          </div>
        </template>
      </EasyDataTable>
    </div>
  </main>
</template>

<style scoped>
.table-mapel {
  --easy-table-header-font-size: 1.1rem;
}
</style>
