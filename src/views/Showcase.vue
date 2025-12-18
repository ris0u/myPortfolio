<script setup>
import { ref } from 'vue';
import acadproject1 from '../assets/images/acadproject1.png';
import acadproject2 from '../assets/images/acadproject2.png';
import acadproject3 from '../assets/images/acadproject3.jpg';
import personalproject1 from '../assets/images/personalproject1.png';
import personalproject2 from '../assets/images/personalproject2.png';

const projects = ref([
  {
    title: 'Tips&Eats',
    description: 'An academic-based project food-niched social media web applications dedicated for food hobbyist and health enthusiast.',
    tech: 'Figma • CSS • Javascript • MySQL • PHP',
    image: acadproject1,
    link: 'https://github.com/ris0u/Tips-Eats',
    status: 'completed'
  },

  {
    title: 'Government Website Redesign',
    description: 'An academic work which aims to redesign the main landing page of the Marikina Government website using Figma.',
    tech: 'Figma',
    image: acadproject2,
    link: 'https://www.figma.com/design/od7XuHPGuZrND04J5ZC5dE/webdev-midterms?node-id=0-1&t=rWCZ5Wglkb7jzmej-1',
    status: 'completed'
  },

  
  {
    title: 'EchoSense',
    description: 'An academic AI‑powered research project for speech‑to‑text transcription, keyword alerts, and speaker‑distance detection.',
    tech: 'Python',
    image: acadproject3,
    link: 'https://github.com/ris0u/EcoSense-A-Smart-Wearable-for-Deaf-individuals-and-Hearing-Impaired',
    status: 'completed'
  },

  {
    title: 'Leave Management System',
    description: 'A personal design project that streamlines the process of managing employee leave requests and approvals.',
    tech: 'Figma',
    image: personalproject1,
    link: 'https://www.figma.com/design/gaxe1LxWzs5LSlCaAQxk9X/Leave-Manage-System-UX-Design?node-id=0-1&t=9m3fF5QdBeIbeOQc-1',
    status: 'completed'
  },

  {
    title: 'Fashion E-Commerce Design',
    description: 'A personal project focused on designing a user-friendly and visually appealing e-commerce platform for fashion products.',
    tech: 'Figma',
    image: personalproject2,
    link: 'https://www.figma.com/design/gaxe1LxWzs5LSlCaAQxk9X/Leave-Manage-System-UX-Design?node-id=303-3059&t=IRUKSAFGhhwDYrvI-1',
    status: 'completed'
  },

]);
</script>

<template>
  <div class="showcase-page">
    <div class="header-section">
      <h1>Project Showcase</h1>
      <p class="tagline">A collection of my personal work and academic projects.</p>
    </div>

    <div class="project-grid">
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="project-card glass-panel"
        :style="{ animationDelay: (index * 0.1) + 's' }"
      >
        <div class="card-image">
          <img :src="project.image" :alt="project.title" />
          <div class="image-overlay">
            <span class="tech-stack">{{ project.tech }}</span>
          </div>
        </div>
        
        <div class="card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="card-footer">
            <a :href="project.link" class="view-btn">View More</a>
            <span class="status-dot" :class="project.status"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.showcase-page {
  max-width: 1200px;
  margin: 0 auto;
}

.header-section {
  margin-bottom: 40px;
}

h1 {
  color: var(--accent-blue);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

/* Grid Layout */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

/* Card Styling & Glass Effect */
.project-card {
  background: rgba(17, 34, 64, 0.4);
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  animation: slideUp 0.6s ease forwards;
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Hover Effects */
.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: var(--accent-blue);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 255, 218, 0.2);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .image-overlay {
  opacity: 1;
}

.tech-stack {
  color: var(--accent-blue);
  font-weight: bold;
  font-size: 0.9rem;
  border: 1px solid var(--accent-blue);
  padding: 5px 15px;
  border-radius: 20px;
}

.card-content {
  padding: 20px;
}

h3 {
  color: var(--white);
  margin-bottom: 10px;
}

p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.view-btn {
  color: var(--accent-blue);
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
}

.view-btn:hover {
  text-decoration: underline;
}

/* Status Indicators */
.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.completed { background-color: var(--accent-blue); box-shadow: 0 0 8px var(--accent-blue); }
.in-progress { background-color: #ffcc00; box-shadow: 0 0 8px #ffcc00; }
</style>