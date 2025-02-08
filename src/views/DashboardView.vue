<template>
  <div class="min-h-[80vh] bg-gray-100">

    <!-- Main Content -->
    <main>
      <!-- Statistics Section -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatCard title="Total Users" value="1,234" color="blue" />
        <StatCard title="Active Sessions" value="567" color="green" />
        <StatCard title="Pending Tasks" value="89" color="yellow" />
      </section>

      <!-- Chart Section -->
      <section class="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">User Activity Chart</h2>
        <Chart />
      </section>

      <!-- Table Section -->
      <section class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 class="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <table class="w-full text-sm text-left">
          <thead class="text-gray-700 bg-gray-50">
            <tr>
              <th class="px-4 py-2">User</th>
              <th class="px-4 py-2">Activity</th>
              <th class="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(activity, index) in activities" :key="index" class="border-t border-gray-200">
              <td class="px-4 py-2">{{ activity.user }}</td>
              <td class="px-4 py-2">{{ activity.action }}</td>
              <td class="px-4 py-2">{{ activity.date }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StatCard from '../components/StatCard.vue';
import Chart from '../components/Chart.vue';

// Dummy data for the table
const activities = ref([
  { user: 'John Doe', action: 'Logged in', date: '2023-10-01' },
  { user: 'Jane Smith', action: 'Updated profile', date: '2023-10-02' },
  { user: 'Alice Johnson', action: 'Deleted task', date: '2023-10-03' },
]);
</script>

<style scoped>
/* Additional styles if needed */
</style>