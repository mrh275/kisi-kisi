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
      console.log(data.slugItem);

      // axios
      //   .get(url, data, {
      //     headers: {
      //       Accept: "application/json",
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     // const toaster = createToaster({
      //     //   position: "top-right",
      //     //   duration: 3000,
      //     //   dismissible: true,
      //     // });
      //     // toaster.success(response.data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
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
