<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  audits: {
    type: Array,
    required: true,
    default: () => ([])
  }
})
</script>

<template>
  <div class="audit-container">
    <h1 class="audit-title">Auditorías y Asesorías Realizadas</h1>
    <h2 class="audit-subtitle">Resumen de Actividades</h2>
    <table class="audit-table">
      <thead>
        <tr>
          <th>Empresa</th>
          <th>Fechas</th>
          <th>Auditoría / Asesoría</th>
          <th>Rol</th>
          <th>Días</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in audits" :key="item.id">
          <td>{{ item.company }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.auditoriaAsesoria }}</td>
          <td>{{ item.role }}</td>
          <td>{{ item.days }}</td>
          <td>{{ item.status }}</td>
        </tr>
      </tbody>
    </table>
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


