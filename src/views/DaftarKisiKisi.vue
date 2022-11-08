<script lang="ts">
import DataTable from "datatables.net-vue3";
import DataTableBs5 from "datatables.net-bs5";

DataTable.use(DataTableBs5);

const columns = [{ data: "name" }, { data: "position" }, { data: "office" }, { data: "extn" }, { data: "start_date" }, { data: "salary" }];
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
      <DataTable :columns="columns" ajax="/data.json" class="table table-hover table-striped" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Extn.</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </tfoot>
      </DataTable>
    </div>
  </main>
</template>

<style>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
