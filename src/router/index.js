import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Showcase from '../views/Showcase.vue';
import Contact from '../views/Contact.vue';
import Creative from '../views/Creative.vue';
import DahboardLayout from '@/components/DahboardLayout.vue';
// Import other views here...

const routes = [
  { path: '/login', component: Login },
  { 
    path: '/myPortfolio',
    redirect: '/myPortfolio/Profile',
    component: DahboardLayout,
    children: [
      { path: 'profile', component: () => import('../views/Profile.vue') },
      { path: 'showcase', component: () => import('../views/Showcase.vue') },
      { path: 'contact', component: () => import('../views/Contact.vue') },
      { path: 'creative', component: () => import('../views/Creative.vue') },
    ]
  },
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// The Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  
  if (to.path.startsWith('/portfolio') && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;