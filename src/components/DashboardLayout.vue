<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="dashboard-wrapper">
    <aside class="sidebar-nav">
      <div class="logo">My Portfolio</div>
      <router-link to="/myPortfolio/Profile">Profile</router-link>
      <router-link to="/myPortfolio/Showcase">Showcase</router-link>
      <router-link to="/myPortfolio/Contact">Contact</router-link>
      <router-link to="/myPortfolio/Creative">Creative</router-link>
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
  flex-shrink: 0;
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

/* Tablet Responsiveness (≤ 1024px) */
@media (max-width: 1024px) {
  .sidebar-nav {
    width: 200px;
    padding: 20px;
    gap: 10px;
  }
  
  .logo {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  .content-area {
    padding: 20px;
  }
  
  a {
    padding: 8px 12px;
    font-size: 0.95rem;
  }
}

/* Mobile Responsiveness (≤ 768px) */
@media (max-width: 768px) {
  .dashboard-wrapper {
    flex-direction: column;
  }
  
  .sidebar-nav {
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    justify-content: space-around;
    flex-wrap: wrap;
    flex-shrink: 0;
  }
  
  .logo {
    font-size: 1rem;
    margin-bottom: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .content-area {
    padding: 15px;
    overflow-y: auto;
    height: auto;
  }
  
  a {
    padding: 8px 12px;
    font-size: 0.9rem;
    flex: 1 1 auto;
    text-align: center;
  }
  
  a:hover, a.router-link-active {
    transform: none;
  }
}

/* Small Mobile Responsiveness (≤ 480px) */
@media (max-width: 480px) {
  .sidebar-nav {
    padding: 10px;
    gap: 5px;
  }
  
  .logo {
    font-size: 0.9rem;
    margin-bottom: 8px;
  }
  
  .content-area {
    padding: 12px;
  }
  
  a {
    padding: 6px 8px;
    font-size: 0.85rem;
  }
}
</style>