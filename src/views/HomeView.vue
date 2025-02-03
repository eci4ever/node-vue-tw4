<template>
  <div class="min-h-screen bg-gray-50 font-poppins">
    <!-- Hero Section -->
    <section class="bg-blue-400 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to AdminPro</h1>
        <p class="text-lg md:text-xl mb-8">
          The ultimate admin dashboard for managing users, analytics, and more.
        </p>
        <button
          @click="navigateToDashboard"
          class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">Key Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">User Management</h3>
            <p class="text-gray-600">
              Easily manage users with advanced filtering, editing, and deletion capabilities.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0h6"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Analytics Dashboard</h3>
            <p class="text-gray-600">
              Visualize data with interactive charts and tables for better decision-making.
            </p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Responsive Design</h3>
            <p class="text-gray-600">
              Fully responsive design ensures a seamless experience on all devices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
        <p class="text-gray-600 mb-8">
          Join thousands of businesses already using AdminPro to streamline their operations.
        </p>
        <button
          @click="navigateToLogin"
          class="px-6 py-3 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
        >
          Sign In
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-500 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2023 AdminPro. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Navigate to the dashboard
const navigateToDashboard = () => {
  router.push('/dashboard');
};

// Navigate to the login page
const navigateToLogin = () => {
  router.push('/login');
};
</script>