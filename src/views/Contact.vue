<script setup>
import { ref } from 'vue';
const titleContact =ref('My Contacts');
const mycontacts = ref([
  'Email',
  'Phone',
  'LinkedIn',
  'Github',
  'Behance',
  'Dribbble',
]);

</script>


<template>
  <h2 class="page-contact"> 
    {{ titleContact }} 
  </h2>
  
  <div id="contact-container" class="contact-container">
    <div class="contact1-container" id="contact1-container">
      <div class="contact1-info" id="contact1-info">
        <p1>{{ mycontacts[0] }}</p1>
      </div>
    </div>

    <div class="contact1-container" id="contact1-container">
      <div class="contact1-info" id="contact1-info">
        <p1>{{ mycontacts[1] }}</p1>
      </div>
    </div>

    <div class="contact1-container" id="contact1-container">
      <div class="contact1-info" id="contact1-info">
        <p1>{{ mycontacts[2] }}</p1>
      </div>
    </div>

    <div class="contact1-container" id="contact1-container">
      <div class="contact1-info" id="contact1-info">
        <p1>{{ mycontacts[3] }}</p1>
      </div>
    </div>

    <div class="contact1-container" id="contact1-container">
      <div class="contact1-info" id="contact1-info">
        <p1>{{ mycontacts[4] }}</p1>
      </div>
    </div>

    <div class="contact1-container" id="contact1-container">
      <div class="contact1-info" id="contact1-info">
        <p1>{{ mycontacts[5] }}</p1>
      </div>
    </div>
  </div>
</template>


<style scoped>
.page-contact {
  color: var(--accent-blue);
  text-align: center;
}
</style>