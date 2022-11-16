<script>
import { useDropzone } from "vue3-dropzone";
import axios from "axios";

export default {
  name: "UploadKisiKisi",
  setup() {
    const url = "/api/upload-kisi-kisi";
    const saveFilesTmp = (files) => {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("tmpFiles[]", files[i]);
      }
      console.log(formData.getAll("tmpFiles[]"));
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    function onDrop(acceptFiles, rejectReason) {
      saveFilesTmp(acceptFiles);
      //   console.log(rejectReason);
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      ...rest,
    };
  },
};
</script>

<template>
  <div class="flex items-center justify-center w-full">
    <label
      v-bind="getRootProps()"
      for="dropzone-file"
      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
    >
      <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
        </svg>
        <p v-if="isDragActive" class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Drop the files here...</span></p>
        <p v-else class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
      </div>
      <input id="dropzone-file" type="file" class="hidden" v-bind="getInputProps()" />
    </label>
  </div>
</template>
