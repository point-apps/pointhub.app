<template>
  <!-- Header Wrapper-->
  <nav class="header max-w-7xl lg:py-10 bg-white">
    <!-- Header  -->
    <div class="header-container relative flex w-full">
      <div class="flex w-full items-center justify-between">
        <!-- Left: Sidebar Toggle Button -->
        <div class="flex items-center">
          <component :is="ComponentToggleSidebar" v-if="isMobileBreakpoint()" class="pr-2" />
          <router-link to="/" class="lg:px-0 pl-5">
            <img
              src="https://assets.pointhub.net/assets/images/logo/primary/logo.png"
              alt="Pointhub"
              class="w-32 lg:w-52"
            />
          </router-link>
        </div>
        <!-- Right -->
        <div class="lg:flex lg:items-center space-x-3 hidden">
          <router-link to="/">Home</router-link>
          <a href="//merlion.pointhub.app" class="">Signin</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import ComponentToggleSidebar from './component-toggle-sidebar.vue'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'

const { isMobileBreakpoint } = useMobileBreakpoint()
</script>
