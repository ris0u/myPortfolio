<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const hobbies = ref([
  {
    title: 'Gaming',
    description: 'Competitive FPS and immersive RPGs. Currently exploring open-world mechanics.',
    icon: ['fas', 'gamepad'],
    color: '#a855f7' // Purple
  },
  {
    title: 'Photography',
    description: 'Capturing urban landscapes and street life. I love playing with light and shadows.',
    icon: ['fas', 'camera-retro'],
    color: '#3b82f6' // Blue
  },
  {
    title: 'Designing',
    description: 'Creating sleek UI/UX designs and digital illustrations in my free time.',
    icon: ['fas', 'keyboard'],
    color: '#64ffda' // Accent Green
  },
  {
    title: 'Music Production',
    description: 'Experimenting with lo-fi beats and synthwave textures in my home studio.',
    icon: ['fas', 'music'],
    color: '#f43f5e' // Rose
  }
]);
</script>



<template>
  <div class="creative-page">
    <div class="header-section">
      <h1>Beyond the Code</h1>
      <p class="tagline">When I'm not debugging, you'll find me exploring these passions.</p>
    </div>

    <div class="hobby-grid">
      <div 
        v-for="(hobby, index) in hobbies" 
        :key="hobby.title" 
        class="hobby-card glass-panel"
        :style="{ '--hobby-color': hobby.color, animationDelay: (index * 0.15) + 's' }"
      >
        <div class="hobby-icon">
          <font-awesome-icon :icon="hobby.icon" />
        </div>
        
        <div class="hobby-info">
          <h3>{{ hobby.title }}</h3>
          <p>{{ hobby.description }}</p>
        </div>
        
        <div class="hobby-glow"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.header-section h1 {
  color: var(--accent-blue);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.creative-page {
  max-width: auto;
  margin: 0 auto;
}

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.hobby-card {
  position: relative;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Spring Effect */
  animation: popIn 0.6s ease-out forwards;
  opacity: 0;
}

@keyframes popIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.hobby-icon {
  font-size: 3.5rem;
  color: var(--hobby-color);
  margin-bottom: 20px;
  filter: drop-shadow(0 0 10px var(--hobby-color));
  transition: transform 0.4s ease;
}

.hobby-info h3 {
  color: var(--white);
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.hobby-info p {
  color: var(--text-light);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Hover States */
.hobby-card:hover {
  transform: translateY(-15px) rotate(2deg);
  border-color: var(--hobby-color);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.hobby-card:hover .hobby-icon {
  transform: scale(1.2) rotate(-10deg);
}

/* Dynamic Background Glow */
.hobby-glow {
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  background: var(--hobby-color);
  filter: blur(50px);
  opacity: 0.2;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.hobby-card:hover .hobby-glow {
  opacity: 0.5;
  transform: scale(2);
}

.glass-panel {
  background: rgba(17, 34, 64, 0.4);
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
}
</style>