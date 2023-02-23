<template>
  <button class="sidebar-shortcut-link text-red-200" @click="toggleDarkMode()">
    <fa-icon v-if="isDarkMode" icon="fa-solid fa-sun-bright w-6 h-6" />
    <fa-icon v-else icon="fa-regular fa-moon w-6 h-6" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const htmlTag = document.getElementsByTagName('html')[0]
const isDarkMode = ref(htmlTag.classList.contains('dark'))

function toggleDarkMode() {
  if (htmlTag.classList.contains('dark')) {
    htmlTag.classList.remove('dark')
    localStorage.setItem('dark-mode', 'light')
  } else {
    htmlTag.classList.add('dark')
    localStorage.setItem('dark-mode', 'dark')
  }

  isDarkMode.value = htmlTag.classList.contains('dark')
}
</script>
