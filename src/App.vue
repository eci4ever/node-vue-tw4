<template>
  <div class="flex min-h-screen bg-slate-100">
    <!-- Sidebar -->
    <Sidebar
      v-if="!isSidebarHidden && !isLandingPage"
      :class="{ 'translate-x-0': !isSidebarHidden, '-translate-x-full': isSidebarHidden }"
      class="fixed top-0 left-0 w-60 h-screen bg-gray-800 text-white transition-transform duration-300 ease-in-out z-20"
    />
    <!-- Main Content -->
    <div
      class="flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out"
      :class="{ 'ml-0': isSidebarHidden || isLandingPage, 'ml-60': !isSidebarHidden && !isLandingPage }"
    >
      <!-- Navbar -->
      <Navbar @toggle-sidebar="toggleSidebar" :showToggle="!isLandingPage" />
      <!-- Page Content -->
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './components/partials/Sidebar.vue';
import Navbar from './components/partials/Navbar.vue';

// State untuk menyembunyikan/menunjukkan sidebar
const isSidebarHidden = ref(true);

// State untuk memeriksa apakah halaman saat ini adalah landing page
const isLandingPage = ref(false);

// Fungsi untuk toggle sidebar
function toggleSidebar() {
  isSidebarHidden.value = !isSidebarHidden.value;
}

// Watch route changes to determine if the current page is the landing page
const route = useRoute();
watch(
  () => route.path,
  (newPath) => {
    isLandingPage.value = ['/', '/login', '/register'].includes(newPath);
  },
  { immediate: true } // Trigger immediately on component mount
);
</script>