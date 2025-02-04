<script setup>
import { ref } from 'vue';
import { HomeIcon, UserIcon, CogIcon, BriefcaseIcon } from '@heroicons/vue/24/outline'; // Import ikon dari Heroicons
import { useRouter } from 'vue-router';

const router = useRouter();

// Menu items with parent and child structure
const menuItems = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: HomeIcon, // Gunakan komponen ikon
  },
  {
    label: 'Users',
    icon: UserIcon, // Gunakan komponen ikon
    children: [
      { label: 'All Users', path: '/users' },
      { label: 'Add User', path: '/users' },
    ],
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: CogIcon, // Gunakan komponen ikon
  },
  {
    label: 'Shop',
    icon: BriefcaseIcon, // Gunakan komponen ikon
    children: [
      { label: 'Products', path: '/products' },
      { label: 'Orders', path: '/products' },
      { label: 'Customers', path: '/products' },
    ],
  },
  {
    label: 'Blog',
    icon: BriefcaseIcon, // Gunakan komponen ikon
    children: [
      { label: 'Posts', path: '/products' },
      { label: 'Categories', path: '/products' },
      { label: 'Authors', path: '/products' },
      { label: 'Links', path: '/products' },
    ],
  }
];

// State to track expanded menu
const activeIndex = ref(null);

// Function to toggle menu expansion
const toggleMenu = (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null; // Collapse if already expanded
  } else {
    activeIndex.value = index; // Expand the clicked menu
  }
};
</script>

<template>
  <aside
    class="fixed top-0 left-0 w-60 h-screen bg-slate-600 text-white flex flex-col justify-between transition-transform duration-200 ease-in-out z-20"
  >
    <!-- Logo Section -->
    <div class="p-4">
      <div class="flex items-center space-x-2">
        <!-- <img
          src="@/assets/logo.svg"
          alt="Logo"
          class="h-8 w-auto"
        /> -->
        <h1 class="text-lg font-semibold pt-2">Menu Pengguna</h1>
      </div>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-1 overflow-y-auto mt-4">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" class="mb-1">
          <!-- Parent Menu Item -->
          <div
            v-if="item.children"
            class="cursor-pointer flex items-center justify-between px-4 py-2 hover:bg-slate-800 rounded-md transition duration-00"
            @click="toggleMenu(index)"
          >
            <div class="flex items-center space-x-2">
              <component :is="item.icon" class="h-5 w-5 mr-3" />
              <span class="font-thin">{{ item.label }}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 transform transition-transform duration-300"
              :class="{ 'rotate-180': activeIndex === index }"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <!-- Single Menu Item (No Children) -->
          <router-link
            v-else
            :to="item.path"
            class="flex items-center px-4 py-2 hover:bg-slate-800 rounded-md transition duration-300"
          >
            <component :is="item.icon" class="h-5 w-5 mr-3" />
            <span class="font-thin">{{ item.label }}</span>
          </router-link>

          <!-- Child Menu Items -->
          <ul v-if="item.children && activeIndex === index" class="pl-4 mt-2 ml-4 space-y-1">
            <li v-for="(child, childIndex) in item.children" :key="childIndex">
              <router-link
                :to="child.path"
                class="block px-4 py-2 hover:bg-slate-700 rounded-md transition duration-300"
              >
               <span class="font-thin">{{ child.label }}</span> 
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>