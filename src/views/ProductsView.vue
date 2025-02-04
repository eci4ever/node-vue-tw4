<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <!-- Header -->
      <h1 class="text-2xl font-bold text-gray-800 mb-6">ICT Product Management</h1>
  
      <!-- Table Actions -->
      <div class="flex justify-between items-center mb-4">
        <button
          @click="deleteSelected"
          :disabled="selectedItems.length === 0"
          class="px-4 py-2 bg-red-500 text-white rounded-md disabled:bg-gray-400 hover:bg-red-600 transition duration-300"
        >
          Delete Selected ({{ selectedItems.length }})
        </button>
      </div>
  
      <!-- Data Table -->
      <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  v-model="selectAll"
                  @change="toggleSelectAll"
                  class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="product in paginatedProducts" :key="product.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  v-model="selectedItems"
                  :value="product.id"
                  class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ product.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ product.category }}</td>
              <td class="px-6 py-4 whitespace-nowrap">${{ product.price }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button
                  @click="deleteProduct(product.id)"
                  class="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:bg-gray-100 hover:bg-gray-300 transition duration-300"
        >
          Previous
        </button>
        <span class="text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:bg-gray-100 hover:bg-gray-300 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  // Sample data
  const products = ref([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 800 },
    { id: 3, name: 'Tablet', category: 'Electronics', price: 400 },
    { id: 4, name: 'Keyboard', category: 'Accessories', price: 50 },
    { id: 5, name: 'Mouse', category: 'Accessories', price: 30 },
  ]);
  
  // Pagination state
  const currentPage = ref(1);
  const pageSize = ref(3);
  
  // Selection state
  const selectedItems = ref([]);
  
  // Computed properties
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return products.value.slice(start, end);
  });
  
  const totalPages = computed(() => Math.ceil(products.value.length / pageSize.value));
  
  const selectAll = computed({
    get: () => selectedItems.value.length === paginatedProducts.value.length,
    set: (value) => {
      if (value) {
        selectedItems.value = paginatedProducts.value.map((product) => product.id);
      } else {
        selectedItems.value = [];
      }
    },
  });
  
  // Pagination methods
  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };
  
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  
  // Selection methods
  const toggleSelectAll = () => {
    selectAll.value = !selectAll.value;
  };
  
  // Deletion methods
  const deleteProduct = (id) => {
    products.value = products.value.filter((product) => product.id !== id);
  };
  
  const deleteSelected = () => {
    products.value = products.value.filter((product) => !selectedItems.value.includes(product.id));
    selectedItems.value = [];
  };
  </script>