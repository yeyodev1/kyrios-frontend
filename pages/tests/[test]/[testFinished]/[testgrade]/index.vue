<script setup>
import { ref, onMounted, computed } from 'vue';
import useTestStore from '@/store/TestStore';
import Chart from 'chart.js/auto';

const testStore = useTestStore();

const testId = 'iso20000';
const barChart = ref(null);
const pieChart = ref(null);
const testResults = computed(() => testStore.selectedTest);

testStore.selectTest(testId);

function getChartData () {
  const counts = {
    'Implementado listo para auditar': 0,
    'Implementado, documentado pero requiere mejorar': 0,
    'Implementado pero no formalizado ni comunicado': 0,
    'Sin documentar ni implementar': 0
  };

  testResults.value.questions.forEach(question => {
    if (question.response) {
      counts[question.response.description]++;
    }
  });

  return {
    labels: Object.keys(counts),
    datasets: [{
      label: 'Cantidad',
      data: Object.values(counts),
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };
};

onMounted(() => {
  const chartData = getChartData();

  barChart.value = new Chart(
    document.getElementById('barChart'),
    {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  );

  pieChart.value = new Chart(
    document.getElementById('pieChart'),
    {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Distribución de respuestas'
          }
        }
      }
    }
  );
});
</script>

<template>
  <div class="results-container">
    <h1>Resultados de la Prueba ISO 20000</h1>
    <table class="results-table">
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Implementado listo para auditar</th>
          <th>Implementado, documentado pero requiere mejorar</th>
          <th>Implementado pero no formalizado ni comunicado</th>
          <th>Sin documentar ni implementar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(result, index) in testResults" :key="index">
          <td>{{ result.question }}</td>
          <td>{{ result.response?.description === 'Implementado listo para auditar' ? '✓' : '' }}</td>
          <td>{{ result.response?.description === 'Implementado, documentado pero requiere mejorar' ? '✓' : '' }}</td>
          <td>{{ result.response?.description === 'Implementado pero no formalizado ni comunicado' ? '✓' : '' }}</td>
          <td>{{ result.response?.description === 'Sin documentar ni implementar' ? '✓' : '' }}</td>
        </tr>
      </tbody>
    </table>
    <div class="charts-container">
      <div class="bar-chart-container">
        <canvas id="barChart"></canvas>
      </div>
      <div class="pie-chart-container">
        <canvas id="pieChart"></canvas>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  .results-table {
    margin-bottom: 2rem;
    border-collapse: collapse;
    width: 100%;
    th,
    td {
      border: 1px solid #ddd;
      text-align: left;
      padding: 8px;
      &.th {
        background-color: #f2f2f2;
      }
    }
  }
  .charts-container {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .bar-chart-container,
    .pie-chart-container {
      width: 50%;
    }
  }
  canvas {
    max-width: 100%;
  }
}
</style>