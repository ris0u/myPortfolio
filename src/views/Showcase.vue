<script setup>
import { ref } from 'vue';
const pageShowcase = ref('My Projects');

</script>


<template>
  <section id="showcase" class="showcase">
    <h2> {{ pageShowcase }} </h2>
    <div class="project-list" id="project-list">
      <div class="project1-container" id="project1-container">
        <div class="project1-info" id="project1-info">
          sample project 1
        </div>
      </div>

      <div class="project1-container" id="project1-container">
        <div class="project1-info" id="project1-info">
          sample project 2
        </div>
      </div>

      <div class="project1-container" id="project1-container">
        <div class="project1-info" id="project1-info">
          sample project 3
        </div>
      </div>

      <div class="project1-container" id="project1-container">
        <div class="project1-info" id="project1-info">
          sample project 4
        </div>
      </div>

      <div class="project1-container" id="project1-container">
        <div class="project1-info" id="project1-info">
          sample project 5
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
</style>