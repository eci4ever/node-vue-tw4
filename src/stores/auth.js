import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuthenticated = ref(false);

  function login(username) {
    user.value = username;
    isAuthenticated.value = true;
  }

  function logout() {
    user.value = null;
    isAuthenticated.value = false;
  }

  return { user, isAuthenticated, login, logout };
});