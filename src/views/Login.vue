<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const handleLogin = () => {
  // Simple hardcoded validation
  if (username.value === 'kian' && password.value === 'kian123') {
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/myPortfolio/profile');
  } else {
    errorMessage.value = 'Invalid username or password';
  }
};
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Welcome Back</h2>
      <p>Please login to access the dashboard</p>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <label>Username</label>
          <input type="text" v-model="username" required placeholder="Enter username.." />
        </div>
        
        <div class="input-group">
          <label>Password</label>
          <input type="password" v-model="password" required placeholder="Enter password.." />
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
      
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-navy); /* Deep Navy */
}

.login-card {
  background: var(--secondary-navy);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: var(--white);
  /* Spring Animation on Entry */
  animation: springEntry 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

@keyframes springEntry {
  0% { transform: scale(0.5); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

h2 {
  margin-bottom: 0.5rem;
  color: var(--accent-blue);
}

p{
  margin-bottom: 1.5rem;
  font-weight: 200;
  font-size: small;
}

.input-group {
  text-align: left;
  margin-bottom: 1.5rem;
}

input {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  background: #0a192f;
  border: 1px solid #233554;
  color: white;
  border-radius: 4px;
  transition: border 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #64ffda; /* Accent Blue */
}

.login-btn {
  width: 100%;
  padding: 12px;
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px); /* Hover lift */
}

.error {
  color: #ff4d4d;
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>