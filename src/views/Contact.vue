<script setup>
import { ref } from 'vue';

// Mapping your list to Font Awesome icons and specific brand colors
const contactList = ref([
  { 
    name: 'Email', 
    icon: 'fa-solid fa-envelope', 
    color: '#64ffda',
    link: 'mailto:kian.manalastas11@gmail.com',
  },
  { 
    name: 'Phone', 
    icon: 'fa-solid fa-phone', 
    color: '#4facfe',
    link: 'tel:+639454002426',
  },
  { name: 'LinkedIn', 
  icon: 'fa-brands fa-linkedin-in', 
  color: '#0077b5',
  link: 'https://www.linkedin.com/in/kian-manalastas-7824331a1/'
},
  { name: 'Github', 
  icon: 'fa-brands fa-github', 
  color: '#ffffff',
  link: 'https://github.com/ris0u',
},
  { name: 'Dribbble', 
  icon: 'fa-brands fa-dribbble', 
  color: '#ea4c89',
  link: 'https://dribbble.com/_kiannn',
},
  { name: 'Facebook', 
  icon: 'fa-brands fa-behance', 
  color: '#1769ff',
  link: 'https://www.facebook.com/risouu.kn/',
},
  { name: 'Instagram', 
  icon: 'fa-brands fa-instagram', 
  color: '#e1306c',
  link: 'https://www.instagram.com/ris0u/',
}
]);
</script>


<template>
  <div class="contact-page">
    <div class="header-section">
      <h1>Let's Connect</h1>
      <p class="tagline">Find me on any of these platforms. I'm usually just a click away.</p>
    </div>

    <div class="contact-grid">
      <a 
        v-for="contact in contactList" 
        :key="contact.name" 
        :href="contact.link"
        target="_blank"
         rel="noopener noreferrer" 
        class="contact-card glass-panel"
        :style="{ '--accent-color': contact.color }"
      >
        <div class="icon-box">
          <i :class="contact.icon"></i>
        </div>
        <span class="contact-name">{{ contact.name }}</span>
        <div class="glow-layer"></div>
      </a>
    </div>
  </div>
</template>


<style scoped>
.header-section h1 {
  color: var(--accent-blue);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.contact-page {
  max-width: auto;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
  margin-top: 50px;
}

/* Glass Card Styling */
.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-decoration: none;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.icon-box i {
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 15px;
  transition: transform 0.4s ease;
}

.contact-name {
  color: var(--white);
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.1rem;
}

/* Hover Animations */
.contact-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-color);
  background: rgba(17, 34, 64, 0.6);
}

.contact-card:hover .icon-box i {
  transform: scale(1.2) rotate(5deg);
}

/* Neon Glow Layer */
.glow-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--accent-color) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -1;
}

.contact-card:hover .glow-layer {
  opacity: 0.15;
}

.contact-card:hover .contact-name {
  color: var(--accent-color);
  text-shadow: 0 0 10px var(--accent-color);
}
</style>