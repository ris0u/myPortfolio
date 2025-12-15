<template>
  <header class="Profile">
    <h2>Kian Manalastas</h2>
    <nav class="profile-navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>



<script>
export default {
  name: 'Profile'
}


</script>


<style scoped>
.Profile {
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2%
    
}

.profile-navbar {
    margin-left: 50%;
}
.profile-navbar ul {
    list-style-type: none;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    gap: 20px;
}

h2 {
    margin-left: 8%;
}
</style>