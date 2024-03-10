<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  audits: {
    type: Array,
    required: true,
    default: () => ([])
  }
})
</script>

<template>
  <div class="audit-container">
    <h1 class="audit-title">{{ title }}</h1>
    <h2 class="audit-subtitle">Resumen de Actividades</h2>
    <div class="table-responsive">
      <table class="audit-table">
        <thead>
          <tr>
            <th>Razon social</th>
            <th>Trabajo Realizado</th>
            <th>tiempo de trabajo</th>
            <th>Numero de personas</th>
            <th>Referencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in audits" :key="item.id">
            <td>{{ item.company }}</td>
            <td>{{ item.work }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.people }}</td>
            <td>{{ item.references }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.audit-container {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.audit-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.audit-subtitle {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.table-responsive {
  overflow-x: auto;
}

.audit-table {
  width: 100%;
  border-collapse: collapse;
}

.audit-table th,
.audit-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.audit-table th {
  background-color: #f2f2f2;
}
</style>


