<script setup>
import { ref } from 'vue';
const titleHobbies =ref('My Hobbies');
const myhobbies = ref([
  'Designing',
  'Reading',
  'Gaming',
  'Traveling',
]);
</script>

<template>
  <h2 class="titlepage-creative"> 
    {{ titleHobbies }} 
  </h2>
  
  <div id="hobby-lists" class="hobby-lists">
    <div class="hobby1-container" id="hobby1-container">
      <div class="hobby1-info" id="hobby1-info">
        <p1> {{ myhobbies[0] }} </p1>
      </div>
    </div>

    <div class="hobby2-container" id="hobby2-container">
      <div class="hobby1-info" id="hobby1-info">
        <p1> {{ myhobbies[1] }} </p1>
      </div>
    </div>

    <div class="hobby2-container" id="hobby2-container">
      <div class="hobby1-info" id="hobby1-info">
        <p1> {{ myhobbies[2] }} </p1>
      </div>
    </div>

    <div class="hobby2-container" id="hobby2-container">
      <div class="hobby1-info" id="hobby1-info">
        <p1> {{ myhobbies[3] }} </p1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titlepage-creative {
    color: var(--accent-blue);
}
</style>