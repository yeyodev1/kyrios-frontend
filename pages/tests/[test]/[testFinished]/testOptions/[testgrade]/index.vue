<script setup>
import { ref, onMounted, computed } from 'vue';
import { Chart, registerables } from 'chart.js';
import useUserStore from '~/store/UserStore';

Chart.register(...registerables);

const userStore = useUserStore();
const barChart = ref(null);
const pieChart = ref(null);

onMounted(async () => {
  try {
    const session = await userStore.getSession();
    const userId = session.id;
    const lastTest = await userStore.getLastTest(userId);

    const counts = {
      'Implementado listo para auditar': 0,
      'Implementado, documentado pero requiere mejorar': 0,
      'Implementado pero no formalizado ni comunicado': 0,
      'Sin documentar ni implementar': 0
    };

    lastTest.questions.forEach(question => {
      if (question.userResponse) {
        counts[question.userResponse]++;
      }
    });

    const chartData = {
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
  } catch (error) {
    console.error('Error obteniendo lo escogido por el usuario', error);
  }
});
</script>

<template>
  <div class="container">
    <div id="chartContainer">
      <canvas id="barChart"></canvas>
      <canvas id="pieChart"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#chartContainer {
  padding: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 48px;
  gap: 48px;
}
</style>