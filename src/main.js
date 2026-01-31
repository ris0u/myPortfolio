import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router';
import Login from './views/Login.vue';
import DahboardLayout from '@/components/DahboardLayout.vue';

// FontAwesome configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHtml5, faCss3, faNodeJs, faVuejs, faPhp, faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(fas, fab, faHtml5, faCss3, faNodeJs, faVuejs, faPhp, faPython, faJs, faReact)

// Define routes
const routes = [
  { path: '/login', component: Login },
  { 
    path: '/myPortfolio',
    redirect: '/myPortfolio/Profile',
    component: DahboardLayout,
    children: [
      { path: 'profile', component: () => import('./views/Profile.vue') },
      { path: 'showcase', component: () => import('./views/Showcase.vue') },
      { path: 'contact', component: () => import('./views/Contact.vue') },
      { path: 'creative', component: () => import('./views/Creative.vue') },
    ]
  },
  { path: '/', redirect: '/login' }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// The Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  
  if (to.path.startsWith('/myPortfolio') && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router); // Tell the application to use the router
app.mount('#app');