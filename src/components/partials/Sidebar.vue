<script setup>
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/vue/24/solid'; // Import ikon dari Heroicons
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// Menu items
const menuItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: HomeIcon, // Gunakan komponen ikon
  },
  {
    label: 'Users',
    path: '/users',
    icon: UserIcon, // Gunakan komponen ikon
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: CogIcon, // Gunakan komponen ikon
  },
];

// Logout function
function logout() {
  authStore.logout();
  router.push('/');
}
</script>

<template>
  <aside
    class="fixed top-0 left-0 w-60 h-screen bg-slate-600 text-white flex flex-col justify-between transition-transform duration-200 ease-in-out z-20"
    :class="{ 'translate-x-0': !isHidden, '-translate-x-full': isHidden }"
  >
    <!-- Logo Section -->
    <div class="p-4">
      <div class="flex items-center space-x-2">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="h-8 w-auto"
        />
        <h1 class="text-lg font-semibold">SPMP</h1>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 overflow-y-auto mt-6">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" class="mb-1">
          <router-link
            :to="item.path"
            class="flex items-center px-4 py-2 hover:bg-slate-800 cursor-pointer"
          >
            <component
              :is="item.icon"
              class="h-5 w-5 mr-3"
            />
            <span class="font-thin">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>