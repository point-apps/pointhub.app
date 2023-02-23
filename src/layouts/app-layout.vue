<template>
  <app-preloader class="print:hidden"></app-preloader>

  <!-- Page Wrapper -->
  <div class="h-100vh flex flex-col dark:bg-slate-900 max-w-7xl mx-auto">
    <div class="flex grow">
      <app-sidebar class="print:hidden"></app-sidebar>
      <app-header class="print:hidden"></app-header>
      <main class="main-content">
        <RouterView />
      </main>
    </div>
    <app-footer class="print:hidden"></app-footer>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppPreloader from '@/components/app-preloader.vue'
import AppSidebar from './app-sidebar.vue'
import AppHeader from './app-header.vue'
import AppFooter from './app-footer.vue'
</script>
