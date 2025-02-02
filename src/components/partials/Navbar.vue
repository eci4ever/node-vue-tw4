<template>
  <header class="bg-sky-100 shadow-sm px-6 py-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex items-center space-x-4">
      <button
        @click="toggleSidebar"
        class="text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <h1 class="text-lg  text-gray-800">Admin Panel</h1>
    </div>

    <!-- User Profile Dropdown -->
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          class="w-10 h-10 rounded-full object-cover"
        />
        <span class="hidden md:block text-gray-700">{{ user }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div
        v-if="isDropdownOpen"
        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10"
      >
        <ul class="py-2 text-gray-700">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Profile</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
          </li>
          <li>
            <button
              @click="logout"
              class="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// State untuk dropdown
const isDropdownOpen = ref(false);

// Toggle dropdown
function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

// Logout function
function logout() {
  authStore.logout();
  router.push('/');
}

// Nama pengguna
const user = authStore.user || 'Guest';

// Emit event untuk toggle sidebar
const emit = defineEmits(['toggle-sidebar']);
function toggleSidebar() {
  emit('toggle-sidebar');
}
</script>