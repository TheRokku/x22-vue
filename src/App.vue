<script setup>
import { RouterLink, RouterView } from 'vue-router'

const routes = [
  { name: 'Home', path: '/', meta: { title: 'Home - X22 Digital' } },
  { name: 'About', path: '/about', meta: { title: 'About - X22 Digital' } },
]
</script>

<template>
  <nav class="flex m-5 gap-5">
    <RouterLink v-for="route in routes" :to="route.path">{{ route.name }}</RouterLink>
  </nav>
  <RouterView />
</template>
