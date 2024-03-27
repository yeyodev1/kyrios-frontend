<script setup lang="ts">
</script>

<template>
  <section class="table__section">
    <h2 class="table__title">
      Clientes por segmento
    </h2>
    <div class="table__container">
      <table>
      <tr>
        <th>Segmento</th>
        <th>Número de Clientes</th>
      </tr>
      <tr>
        <td>Productos y Servicios Financieros</td>
        <td>16</td>
      </tr>
      <tr>
        <td>Industrias y Talleres</td>
        <td>38</td>
      </tr>
      <tr>
        <td>Seguridad Física y Electrónica</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Servicios Médicos, Laboratorios Clínicos y Fabricación de Medicamentos</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Comercialización</td>
        <td>10</td>
      </tr>
      <tr>
        <td>Courier, Transporte, Servicios de Comercio Exterior, Eventos, Bodegas y Logística, Consultoría</td>
        <td>22</td>
      </tr>
      <tr>
        <td>Telecomunicaciones y Servicios de Tecnología</td>
        <td>12</td>
      </tr>
      <tr>
        <td>Educación</td>
        <td>8</td>
      </tr>
      <tr>
        <td>Alimentos</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Construcción, Servicios de Consultoría</td>
        <td>13</td>
      </tr>
    </table>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.table__section {
  padding: 60px 70px;
  font-family: $font;
  display: flex;
  gap: 40px;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 60px 20px;
  }
}

.table__title {
  font-size: 3rem;
  margin-bottom: 16px;
  color: $black;
}
.table__container{
  overflow-x: auto;
  width: 80vw;
}

table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
  font-size: 1.5rem;
  color: $white;
}

th {
  background-color: $red;
  color: $white;
  padding: 16px 0;
  font-weight: 700;
}
td {
  color: $black;
  max-width: 20ch;
  padding: 20px 30px;
  margin: 0 auto;
}
td:nth-child(even) {
  text-align: center;
}

@media (max-width: 1200px) {
  .table__section {
    padding: 60px 20px;
  }

  table {
    font-size: 1.2rem;
  }

  td, th {
    padding: 10px 15px;
  }
}
</style>