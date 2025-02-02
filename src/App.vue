<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar
      v-if="!isSidebarHidden"
      :class="{ 'translate-x-0': !isSidebarHidden, '-translate-x-full': isSidebarHidden }"
      class="fixed top-0 left-0 w-52 h-screen bg-gray-800 text-white transition-transform duration-300 ease-in-out z-20"
    />

    <!-- Main Content -->
    <div
      class="flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
      :class="{ 'ml-0': isSidebarHidden, 'ml-52': !isSidebarHidden }"
    >
      <!-- Navbar -->
      <Navbar @toggle-sidebar="toggleSidebar" />

      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './components/partials/Sidebar.vue';
import Navbar from './components/partials/Navbar.vue';

// State untuk menyembunyikan/menunjukkan sidebar
const isSidebarHidden = ref(true);

// Toggle sidebar visibility
function toggleSidebar() {
  isSidebarHidden.value = !isSidebarHidden.value;
}
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
}
</style>