<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <RouterView />
</template>

<style>
body {
  background-image: linear-gradient(176deg, rgb(18, 24, 27) 50%, rgb(38, 32, 55) 100%);
  min-height: 100vh;
  background-attachment: fixed;
  color: #f2f2f2;
}
body::selection {
  background: #723a9a;
  color: white;
}

body::-moz-selection {
  background: #723a9a;
  color: white;
}

body::selection {
  background: #723a9a;
}
</style>
