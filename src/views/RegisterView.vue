<template>
    <div class="min-h-[80vh] flex items-center justify-center bg-slate-100">
      <div class="w-full max-w-md p-6 space-y-4 bg-white shadow-lg rounded-lg">
        <div class="flex justify-center">
        <!-- <img
          src="https://baconmockup.com/250/250/"
          alt="Company Logo"
          class="w-20 h-20 rounded-full"
        /> -->
      </div>
        <h2 class="text-xl font-bold text-center text-gray-800">Daftar Akaun</h2>
        <form @submit.prevent="handleRegister" class="space-y-4">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
            <input
              v-model="name"
              type="text"
              id="name"
              placeholder="Nama Penuh"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Emel</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="example@company.com"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Kata Laluan</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="********"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="passwordConfirm" class="block text-sm font-medium text-gray-700">Sahkan Kata Laluan</label>
            <input
              v-model="passwordConfirm"
              type="passwordConfirm"
              id="passwordConfirm"
              placeholder="********"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Daftar
          </button>
        </form>

              <!-- Pautan Daftar Pengguna Baru -->
      <div class="text-center">
        <p class="text-sm text-gray-600">
          Kembali ke
          <router-link to="/" class="font-medium text-indigo-600 hover:text-indigo-500">
            Halaman Utama
          </router-link>
        </p>
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const passwordConfirm = ref('');
  
//   const handleRegister = () => {
//     console.log('Name:', name.value);
//     console.log('Email:', email.value);
//     console.log('Password:', password.value);
  
//     // Di sini anda boleh tambahkan logik pendaftaran sebenar
//     alert('Pendaftaran berjaya!');
//   };
  </script>