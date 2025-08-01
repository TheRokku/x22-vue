<script setup>
import { ref } from 'vue'

let isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
<template>
  <nav
    class="flex items-center justify-center p-4 bg-logo-purple/20 backdrop-blur-2xl w-[calc(100dvw-50rem)] rounded-full my-4 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 sm:w-[calc(100dvw-20dvw)] max-sm:hidden"
  >
    <ul class="flex justify-between items-center mx-2 w-full font-titles text-lg font-semibold">
      <li>
        <a class="hover:opacity-80 transition-opacity duration-300 max-w-fit" href="/">
          <img src="/public/favicon.ico" alt="x22Digital Logo" width="55px" height="55px" />
        </a>
      </li>
      <ul class="flex justify-around items-center gap-4">
        <li class="hover:text-light-purple transition-colors duration-300 text-lg">
          <a href="/servicios">Servicios</a>
        </li>
        <li class="hover:text-light-purple transition-colors duration-300 text-lg">
          <a href="/contacto">Contacto</a>
        </li>
        <li class="hover:text-light-purple transition-colors duration-300 text-lg">
          <a href="/sobreNosotros">Sobre nosotros</a>
        </li>
        <li class="relative">
          <select class="bg-dark-purple rounded-2xl px-2 py-1 text-lg focus:outline-none">
            <option value="es" selected>Español</option>
            <option value="en">English</option>
          </select>
        </li>
      </ul>
    </ul>
  </nav>

  <!-- Mobile Hamburger Menu -->
  <div class="sm:hidden fixed top-4 right-4 z-50">
    <button
      v-if="!isMenuOpen"
      @click="toggleMenu()"
      id="hamburger-button"
      class="text-white focus:outline-none"
      aria-label="Menu"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
  </div>

  <!-- Mobile Menu Overlay -->
  <div
    v-if="isMenuOpen"
    id="mobile-menu"
    class="sm:hidden fixed inset-0 bg-logo-purple/10 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-white text-xl"
  >
    <button
      @click="toggleMenu()"
      id="close-button"
      class="absolute top-4 right-4 text-white focus:outline-none"
      aria-label="Close menu"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <a href="/" class="hover:opacity-80 transition-opacity duration-300">
      <img src="/public/favicon.ico" alt="x22Digital Logo" width="80px" height="80px" />
    </a>

    <a href="/servicios" class="hover:text-light-purple transition-colors duration-300"
      >Servicios</a
    >
    <a href="/contacto" class="hover:text-light-purple transition-colors duration-300">Contacto</a>
    <a href="/sobreNosotros" class="hover:text-light-purple transition-colors duration-300"
      >Sobre nosotros</a
    >

    <div class="relative mt-4">
      <select class="bg-dark-purple rounded-2xl px-4 py-2 text-lg focus:outline-none">
        <option value="es" selected>Español</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>
<style scoped>
nav {
  animation: scaleIn 500ms ease-out forwards;
}

@keyframes scaleIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
