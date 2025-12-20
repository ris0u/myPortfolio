<script setup>
import { ref } from "vue";
import profilePhoto from "@/assets/images/profile.jpg";
import downloadResume from "@/assets/images/Kianmanalastas.png";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Constant variables for profile information
const firstName = ref("Kian");
const lastName = ref("Manalastas");
const tagline = ref("UI/UX Designer | FrontEnd Developer");
const bio = ref(
  "Highly motivated and detail-oriented with a strong academic foundation in Computer Engineering. Skilled in problem-solving, teamwork, and adapting quickly to new challenges. Demonstrated ability to learn and apply concepts through academic projects, internships, and volunteer work. Seeking an entry-level opportunity to contribute to organizational success while continuing to develop professional expertise."
);
const location = ref("Metro Manila, Philippines");
const email = ref("kian.manalastas11@gmail.com");
const coreSkills = ref(
  "Vue.JS, Node.JS, JavaScript, CSS3, MQTT, Postman, HTML5, Bootstrap, PHP, MySQL, Firebase, RestAPI, Git, Figma, AdobeXD, Blender, Photoshop, Premiere Pro, Visual Studio Code, Github, Canva, Trello"
);
const role = ref("Front-End Developer and UI/UX Designer");
const education = ref(
  "Bachelor of Science in Computer Engineering - Polytechnic University of the Philippines"
);
const experience = ref(
  "Social innovation Technologies Inc. - Assisted in front-end development and UI/UX design."
);
</script>

<template>
  <div class="profile-page">
    <div class="header-section">
      <h1>
        {{ firstName }} <span class="lastname">{{ lastName }}</span>
      </h1>
      <p class="tagline">{{ tagline }}</p>
    </div>

    <div class="profile-content">
      <div class="profile-sidebar">
        <div class="photo-container">
          <img
            v-bind:src="profilePhoto"
            alt="Profile Photo"
            class="profile-photo"
          />
          <div class="photo-border-pulse" />
        </div>
        <button class="download-btn">
          <a v-bind:href="downloadResume" download>
            <font-awesome-icon icon="fa-solid fa-user" />&nbsp; Download Resume
          </a>
        </button>
      </div>

      <div class="profile-details">
        <h2 class="typing">Background</h2>
        <p class="bio">{{ bio }}</p>

        <div class="details-grid">
          <div><strong>Location:</strong> {{ location }}</div>
          <div><strong>Email:</strong> {{ email }}</div>
          <div><strong>Core Skill:</strong> {{ coreSkills }}</div>
          <div><strong>Role:</strong> {{ role }}</div>
          <div><strong>Education:</strong> {{ education }}</div>
          <div><strong>Internship:</strong> {{ experience }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.typing {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid var(--accent-blue); /* cursor */

  /* 2s typing + 3s pause + 2s deleting = 7s total */
  animation: typing 7s steps(10) infinite;
}

/* Typing + pause + deleting */
@keyframes typing {
  0% {
    width: 0ch;
    border-right-color: var(--accent-blue);
  } /* typing starts,  cursor solid */
  30% {
    width: 10ch;
    border-right-color: var(--accent-blue);
  } /* typing ends */
  40% {
    width: 10ch;
    border-right-color: transparent;
  } /* start blinking */
  50% {
    width: 10ch;
    border-right-color: var(--accent-blue);
  }
  60% {
    width: 10ch;
    border-right-color: transparent;
  }
  70% {
    width: 10ch;
    border-right-color: var(--accent-blue);
  } /* end of blinking phase */
  100% {
    width: 0ch;
    border-right-color: var(--accent-blue);
  } /* deleting, cursor solid again */
}

.profile-page {
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
}

.header-section {
  margin-bottom: 40px;
  border-bottom: 2px solid var(--secondary-navy);
  padding-bottom: 10px;
}

h1 {
  color: var(--accent-blue);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.tagline {
  color: var(--text-light);
  font-size: 1.1rem;
  font-weight: 300;
}

.profile-content {
  display: flex;
  gap: 60px;
}

.profile-sidebar {
  flex: 0 0 300px; /* Fixed width for the sidebar */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1vw;
  gap: 3vh;
}

/* --- Photo Animation: Pulse Effect --- */
.photo-container {
  position: relative;
  width: 400px;
  height: 400px;
  margin-bottom: 30px;

}

.profile-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: 0 30%;
  drop-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
  position: relative;
}

.photo-border-pulse {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 1px solid var(--accent-blue);
  border-radius: 50%;
  opacity: 0.4;
  /* Apply a continuous pulse animation */
  animation: pulse 3s infinite cubic-bezier(0.66, 0, 0, 1);
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.6;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.4;
  }
}

/* --- Profile Details (Right Column) --- */
.profile-details {
  flex: 1;
}

h2 {
  color: var(--text-light);
  border-bottom: 1px solid var(--primary-navy);
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #a8b2d1;
}

.details-grid {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 40px;
  padding: 20px;
  background: var(--primary-navy);
  border-radius: 8px;
}

.details-grid strong {
  color: var(--accent-blue);
}

.download-btn {
  
  padding: 12px 25px;
  background: transparent;
  border: 1px solid var(--accent-blue);
  color: var(--accent-blue);
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.download-btn:hover {
  background: var(--accent-blue);
  color: var(--primary-navy);
}

.download-btn a {
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

.download-btn a:hover {
  text-decoration: none;
  color: inherit;
}
</style>
