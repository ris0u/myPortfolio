import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router';
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
  { path: '/', redirect: '/myPortfolio/profile' },
  { 
    path: '/myPortfolio',
    redirect: '/myPortfolio/profile',
    component: DahboardLayout,
    children: [
      { path: 'profile', component: () => import('./views/Profile.vue') },
      { path: 'showcase', component: () => import('./views/Showcase.vue') },
      { path: 'contact', component: () => import('./views/Contact.vue') },
      { path: 'creative', component: () => import('./views/Creative.vue') },
    ]
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router); // Tell the application to use the router
app.mount('#app');