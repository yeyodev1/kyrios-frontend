<template>
  <div class="table-container" v-if="allTables.length > 0">
    <div v-for="(table, index) in allTables" :key="index" class="table-wrapper">
      <table class="table">
        <thead>
          <tr>
            <th v-for="(head, index) in table.head" :key="index">{{ head }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in table.body" :key="rowIndex">
            <td v-for="(cell, colIndex) in row" :key="colIndex">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else>
    <p class="no-data">No hay datos disponibles.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TeamInfoService from '~/api/TeamInfoService';

const teamInfoService = new TeamInfoService();
const allTables = ref<{ head: any[]; body: any[]; }[]>([]);

async function getAllBoardInfo() {
  const response = await teamInfoService.getAllTeamInfo();
  const tables: { head: any[]; body: any[]; }[] = [];
  response.forEach((item: { content: { tablaDeActividades: any; }; }) => {
    const tablaDeActividades = item.content.tablaDeActividades;
    const tbody = tablaDeActividades.tbody;
    const thead = tablaDeActividades.thead;
    const table = {
      head: thead.map((head: { value: any; }) => head.value),
      body: tbody.map((row: { body: any[]; }) => row.body.map((cell: { value: any; }) => cell.value))
    };
    tables.push(table);
  });
  allTables.value = tables;
}

onMounted(() => {
  getAllBoardInfo();
});
</script>

<style lang="scss" scoped>
.table-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.table-wrapper {
  flex: 1;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 5px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #ddd;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: $blue;
  color: $white;
}

.no-data {
  text-align: center;
  color: #888;
  font-style: italic;
}
</style>
