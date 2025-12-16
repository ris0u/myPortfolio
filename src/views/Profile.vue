<script>
export default {
  name: 'Profile'
}
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref('Kian Manalastas');

</script>


<template>
  <header class="Profile">
    <h2>{{ username }}</h2>
  </header>
</template>


<style scoped>

</style>