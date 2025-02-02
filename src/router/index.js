import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// My Code
import Dashboard from '@/components/users/Dashboard.vue'
import Users from '@/components/users/Users.vue'
import Settings from '@/components/users/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
