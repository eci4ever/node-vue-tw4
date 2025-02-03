<template>
    <div class="bg-white rounded-lg shadow-md p-6">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold text-gray-800">User Management</h2>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search users..."
          class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
  
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-700">
          <thead class="bg-gray-50 text-gray-600">
            <tr>
              <th class="px-4 py-3">ID</th>
              <th class="px-4 py-3">Name</th>
              <th class="px-4 py-3">Email</th>
              <th class="px-4 py-3">Role</th>
              <th class="px-4 py-3">Status</th>
              <th class="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(user, index) in paginatedUsers"
              :key="index"
              class="border-b border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <td class="px-4 py-3">{{ user.id }}</td>
              <td class="px-4 py-3">{{ user.name }}</td>
              <td class="px-4 py-3">{{ user.email }}</td>
              <td class="px-4 py-3">{{ user.role }}</td>
              <td class="px-4 py-3">
                <span
                  :class="[
                    user.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700',
                    'px-2 py-1 rounded-full text-xs font-medium',
                  ]"
                >
                  {{ user.status }}
                </span>
              </td>
              <td class="px-4 py-3">
                <button
                  class="text-blue-500 hover:text-blue-700 font-medium mr-2"
                >
                  Edit
                </button>
                <button
                  class="text-red-500 hover:text-red-700 font-medium"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Pagination -->
      <div class="flex justify-between items-center mt-6">
        <p class="text-gray-600">
          Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ totalUsers }} entries
        </p>
        <div class="flex space-x-2">
          <button
            :disabled="currentPage === 1"
            @click="prevPage"
            class="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            :disabled="currentPage === totalPages"
            @click="nextPage"
            class="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Dummy data for users
  const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', status: 'Active' },
    { id: 4, name: 'Alice1 Johnson', email: 'alice1@example.com', role: 'Viewer', status: 'Active' },
    { id: 5, name: 'Alice2 Johnson', email: 'alice2@example.com', role: 'Viewer', status: 'Active' },
    { id: 6, name: 'Alice4 Johnson', email: 'alice3@example.com', role: 'Viewer', status: 'Active' },
    { id: 7, name: 'Alice5 Johnson', email: 'alice4@example.com', role: 'Viewer', status: 'Active' },
    // Add more users as needed
  ]);
  
  const searchQuery = ref('');
  const currentPage = ref(1);
  const pageSize = ref(5);
  
  // Computed properties
  const filteredUsers = computed(() => {
    return users.value.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const paginatedUsers = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredUsers.value.slice(start, end);
  });
  
  const totalUsers = computed(() => filteredUsers.value.length);
  const totalPages = computed(() => Math.ceil(totalUsers.value / pageSize.value));
  const startIndex = computed(() => (currentPage.value - 1) * pageSize.value);
  const endIndex = computed(() => Math.min(currentPage.value * pageSize.value, totalUsers.value));
  
  // Pagination methods
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
    }
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>