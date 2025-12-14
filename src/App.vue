<script setup>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div id="app">
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}
</style>
