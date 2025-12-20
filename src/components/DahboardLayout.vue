<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
}
</script>

<template>
  <div class="dashboard-wrapper">
    <aside class="sidebar-nav">
      <div class="logo">My Portfolio</div>
      <router-link to="/myPortfolio/Profile">Profile</router-link>
      <router-link to="/myPortfolio/Showcase">Showcase</router-link>
      <router-link to="/myPortfolio/Contact">Contact</router-link>
      <router-link to="/myPortfolio/Creative">Creative</router-link>
      
      <button class="logout-btn" @click="handleLogout">Logout</button>
    </aside>
    
    <main class="content-area">
      <router-view />
    </main>
  </div>
</template>


<style scoped>
.dashboard-wrapper {
  display: flex;
  height: 100vh;
  background-color: var(--secondary-navy); 
  color: var(--text-light); 
}
.sidebar-nav {
  width: 250px;
  background-color: var(--primary-navy); 
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.4);
}
.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--accent-blue);
    margin-bottom: 30px;
}
.content-area {
  flex-grow: 1;
  padding: 30px;
  overflow-y: auto;
}
/* Styling for router-links (navigation links) */
a {
    color: var(--text-light);
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 4px;
    transition: var(--transition);
}
a:hover, a.router-link-active {
    background-color: rgba(100, 255, 218, 0.15); 
    color: var(--accent-blue);
    transform: translateX(5px);
}

.logout-btn {
    margin-top: auto; /* Pushes the button to the bottom */
    padding: 10px;
    background: transparent;
    border: 1px solid var(--accent-blue);
    color: var(--accent-blue);
    cursor: pointer;
    transition: all 0.3s ease;
}
.logout-btn:hover {
    background: var(--accent-blue);
    color: var(--primary-navy);
}
</style>