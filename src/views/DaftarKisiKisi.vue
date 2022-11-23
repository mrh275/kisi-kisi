<script>
import axios from "axios";
import { ref } from "vue";
import { createToaster } from "@meforma/vue-toaster";

const searchValue = ref();

export default {
  mounted: function () {
    axios
      .get("/api/kisi-kisi")
      .then((response) => {
        this.loopDataMapel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    document.title = "Daftar Kisi-kisi | Bank Kisi-kisi Ujian SMAN 1 Rawamerta";
  },
  data() {
    return {
      headers: [
        { text: "Mata Pelajaran", value: "mapel" },
        { text: "Kelas", value: "kelas" },
        { text: "Status", value: "status" },
        { text: "Unduh", value: "unduh" },
      ],
      items: [],
      searchValue: searchValue,
      flashMessage: sessionStorage.flashMessage ? sessionStorage.flashMessage : null,
    };
  },
  methods: {
    loopDataMapel(data) {
      data.forEach((item) => {
        if (item.status == 0) {
          this.items.push({ mapel: item.mapel, kelas: item.kelas, status: "Belum Upload", unduh: item.slug });
        } else {
          this.items.push({ mapel: item.mapel, kelas: item.kelas, status: "Terupload", unduh: item.slug });
        }
      });
    },
    downloadKisiKisi(item) {
      const url = "/api/download-kisi-kisi";

      axios
        .get(url, {
          params: {
            itemName: item,
          },
          responseType: "arraybuffer",
        })
        .then(function (response) {
          console.log(response.data);
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = item + ".pdf";
          link.click();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    removeKisiKisi(param) {
      const url = "/api/hapus-kisi-kisi";
      const data = {
        slugItem: param,
      };

      axios
        .post(url, data, {
          headers: {
            Accept: "application/json",
          },
        })
        .then((response) => {
          sessionStorage.setItem("flashMessage", response.data);
          window.location.href = "/daftar-kisi-kisi";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeAlert() {
      sessionStorage.removeItem("flashMessage");
      this.flashMessage = null;
    },
  },
};
</script>

<template>
  <main class="px-6 py-8 text-white bg-gray-800">
    <div class="mb-6 kisi-wrapper">
      <h2 class="text-xl font-semibold text-center kisi-title">
        Daftar Kisi-Kisi <br />
        Mata Pelajaran <br />
        Penilaian Akhir Semester (PAS) Ganjil <br />
        Tahun Pelajaran 2022/2023
      </h2>
    </div>

    <!-- Alert dismissing -->
    <div id="alert-3" v-if="flashMessage != null" class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Info</span>
      <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">{{ flashMessage }}</div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
        data-dismiss-target="#alert-3"
        aria-label="Close"
        @click="removeAlert()"
      >
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <!-- End of alert -->

    <!-- Table Kisi -->
    <div class="px-2 py-4 text-gray-800 bg-white rounded-lg xl:px-6 xl:py-6 table-wrapper">
      <div class="mb-4 search-table-wrapper">
        <label for="searchInput">Cari </label>
        <input type="text" id="searchInput" class="border rounded-md outline-none focus:ring focus:ring-[#0099ff] px-2 py-0.5 ml-1 transition-all ease-in-out duration-200" v-model="searchValue" />
      </div>
      <easy-data-table class="table-mapel" buttons-pagination :headers="headers" :items="items" :rows-per-page="10" :rows-items="[10, 25, 50]" show-index :search-value="searchValue">
        <template #item-unduh="item">
          <div class="unduh-wrapper">
            <button @click="downloadKisiKisi(item.unduh)" class="mx-2 btn btn-primary">Download</button>
            <button @click="removeKisiKisi(item.unduh)" class="mx-2">Hapus</button>
          </div>
        </template>
      </easy-data-table>
    </div>
  </main>
</template>

<style>
.table-mapel {
  --easy-table-header-font-size: 0.8rem;
}
</style>
