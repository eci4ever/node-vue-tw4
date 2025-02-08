<template>
    <div style="width: 100%; height: 400px;">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref, onUnmounted } from 'vue';
  import { Chart } from 'chart.js/auto';
  
  const chartCanvas = ref(null);
  let chartInstance = null;
  
  onMounted(() => {
    if (chartCanvas.value) {
      const ctx = chartCanvas.value.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              label: 'User Activity',
              data: [12, 19, 3, 5, 2, 3],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  });
  
  // Hapus instance Chart saat komponen dihancurkan
  onUnmounted(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }
  });
  </script>