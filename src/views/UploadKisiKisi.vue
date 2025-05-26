<script>
import axios from "axios";
import { createToaster } from "@meforma/vue-toaster";

export default {
  name: "UploadKisiKisi",
  mounted() {
    document.title = "Upload Kisi-kisi | Bank Kisi-kisi Ujian SMAN 1 Rawamerta";
  },
  data() {
    return {
      mapel: null,
      kelas: null,
      jurusan: null,
      tipeUjian: null,
      selectedFiles: null,
      mapelError: null,
      kelasError: null,
      jurusanError: null,
      tipeUjianError: null,
      fileErrors: null,
    };
  },
  methods: {
    sendMapel(event) {
      event.preventDefault();
      if (this.mapel == null) {
        this.mapelError = "Nama mata pelajaran wajib diisi!";
      } else {
        this.mapelError = null;
      }
      if (this.kelas == null) {
        this.kelasError = "Kelas wajib diisi!";
      } else {
        this.kelasError = null;
      }
      if (this.jurusan == null) {
        this.jurusanError = "Jurusan wajib diisi!";
      } else {
        this.jurusanError = null;
      }
      if (!this.tipeUjian) {
        this.tipeUjianError = "Jenis Ujian wajib diisi!";
      } else {
        this.tipeUjianError = null;
      }
      const whiteSpace = /\s/g;
      const fSlash = /\//g;
      let slugMapel = this.mapel.replaceAll(fSlash, "");
      let slugkelas = this.kelas.replaceAll(fSlash, "");
      let slugJurusan = this.jurusan.replaceAll(fSlash, "");
      slugMapel = slugMapel.replaceAll(whiteSpace, "-");
      slugkelas = slugkelas.replaceAll(whiteSpace, "-");
      slugJurusan = slugJurusan.replaceAll(whiteSpace, "-");
      const slugTipeUjian = this.tipeUjian;
      const fileSelected = [this.selectedFiles];
      const data = {
        mapel: this.mapel,
        kelas: this.kelas + " " + this.jurusan,
        tipe_ujian: this.tipeUjian,
        status: 1,
        slug: slugMapel.toLowerCase() + "-" + slugkelas.toLowerCase() + "-" + slugJurusan.toLowerCase() + "-" + slugTipeUjian.toLowerCase(),
        fileMapel: fileSelected[0],
      };
      const url = "/api/upload-kisi-kisi";
      const token = sessionStorage.token;
      this.$swal({
        title: "Sedang mengunggah...",
        timer: 2000,
        didOpen: () => {
          this.$swal.showLoading();
          axios
            .post(url, data, {
              headers: {
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => {
              const toaster = createToaster({
                position: "top-right",
                duration: 3000,
                dismissible: true,
              });
              toaster.success(response.data.message);
              this.mapel = "";
              this.kelas = "";
              this.jurusan = "";
              this.tipeUjian = "";
              this.selectedFiles = null;
              this.$refs.fileupload.value = null;
            })
            .catch((err) => {
              console.log(err);
            });
        },
      });
    },
    onSelectedFile(event) {
      if (event.target.files[0]["type"] === "application/pdf") {
        if (event.target.files[0].size <= 16777216) {
          this.selectedFiles = event.target.files[0];
          this.fileErrors = null;
        } else {
          this.fileErrors = "Maximum size allowed is 2Mb";
        }
      } else {
        this.fileErrors = "PDF file only allowed";
      }
    },
  },
};
</script>

<template>
  <main class="px-6 py-8 text-white bg-gray-800">
    <div class="mb-6 text-xl font-semibold text-center upload-kisi-wrapper xl:text-3xl">
      <h2 class="upload-kisi-title">Form Upload Kisi-kisi</h2>
      <h2 class="upload-kisi-title">Mata Pelajaran</h2>
    </div>
    <form action="" method="post" enctype="multipart/form-data">
      <div class="mb-6">
        <label for="mapel" class="block mb-2 text-sm font-medium text-white">Mata Pelajaran</label>
        <input type="text" v-model="mapel" id="mapel" name="mapel" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" />
        <span class="text-red-500">{{ mapelError }}</span>
      </div>
      <div class="mb-6">
        <label for="kelas" class="block mb-2 text-sm font-medium text-white">Kelas</label>
        <select id="kelas" v-model="kelas" name="kelas" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
          <option value="">Pilih :</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <span class="text-red-500">{{ kelasError }}</span>
      </div>
      <div class="mb-6">
        <label for="tipeUjian" class="block mb-2 text-sm font-medium text-white">Jenis Ujian</label>
        <select id="tipeUjian" v-model="tipeUjian" name="tipeUjian" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
          <option value="">Pilih :</option>
          <option value="PSAS">PSAS</option>
          <option value="PSAT">PSAT</option>
          <option value="PSAJ">PSAJ</option>
        </select>
        <span class="text-red-500">{{ tipeUjianError }}</span>
      </div>
      <div class="mb-6">
        <label for="jurusan" class="block mb-2 text-sm font-medium text-white">Jurusan</label>
        <select id="jurusan" v-model="jurusan" name="jurusan" class="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
          <option value="">Pilih :</option>
          <option value="IPA">IPA</option>
          <option value="IPS">IPS</option>
          <option value="Umum">Umum</option>
        </select>
        <span class="text-red-500">{{ jurusanError }}</span>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-white" for="file_input">Upload file</label>
        <input
          class="block w-full text-sm text-gray-400 placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer focus:outline-none"
          name="fileMapel"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          ref="fileupload"
          @change="onSelectedFile"
        />
        <p class="mt-1 text-sm text-gray-300" id="file_input_help">
          PDF only (max: 2Mb). <span class="text-red-500">{{ fileErrors }}</span>
        </p>
      </div>

      <button type="submit" class="text-white bg-[#0099ff] hover:bg-[#0099ff] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" @click="sendMapel">Simpan</button>
    </form>
  </main>
</template>
