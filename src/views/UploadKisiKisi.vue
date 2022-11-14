<script>
import { useDropzone } from "vue3-dropzone";

export default {
  name: "UploadKisiKisi",
  setup() {
    const url = "http://127.0.0.1:8000/api/uploadFiles";
    const saveFilesTmp = (files) => {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("tmpFiles[]", files[i]);
      }
      console.log(formData.getAll("tmpFiles[]"));
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
  <div>
    <div v-bind="getRootProps()">
      <input v-bind="getInputProps()" />
      <p v-if="isDragActive">Drop the files here...</p>
      <p v-else>Drag and Drop some files here, or click to select files</p>
    </div>
    <button @click="open">Open</button>
  </div>
</template>
