<template>
  <!-- Main Sidebar -->
  <div class="sidebar">
    <div ref="sidebarContainerRef">
      <!-- Sidebar Shortcut -->
      <div class="sidebar-shortcut" :class="{ 'delay-100 duration-200': !sidebarStore.isSidebarOpen }">
        <div class="sidebar-shortcut-container">
          <div class="flex pt-4">
            <router-link to="/">
              <img class="sidebar-logo" src="@/assets/logo-icon.png" alt="logo" />
            </router-link>
          </div>
          <div class="sidebar-shortcut-body">
            <button
              v-for="shortcut in sidebarMenuStore.shortcut"
              :key="shortcut.icon"
              class="sidebar-shortcut-link"
              :class="{ 'bg-slate-300/20': shortcut.active }"
              @click="onClickShortcut(shortcut)"
            >
              <fa-icon :icon="shortcut.icon + ' w-6 h-6'" />
            </button>
          </div>
          <div class="my-2">
            <component :is="ComponentDarkMode" />
          </div>
        </div>
      </div>

      <!-- Sidebar Panel -->
      <div class="sidebar-panel border-r border-slate-900">
        <div class="sidebar-panel-container">
          <!-- Sidebar Panel Header -->
          <div class="sidebar-panel-header">
            <p class="text-base tracking-wider text-slate-100">
              {{ activeShortcut.name }}
            </p>
            <button class="mx-2" @click="sidebarStore.closeSidebar()">
              <fa-icon icon="fa-solid fa-angle-left w-5 h-5 text-gray-200"></fa-icon>
            </button>
          </div>

          <!-- Sidebar Panel Body -->
          <div class="sidebar-panel-body">
            <ul class="flex flex-1 flex-col px-4">
              <li v-for="menu in activeShortcut.menu" :key="menu.name">
                <!-- Sub Menu Wrapper -->
                <button
                  v-if="menu.submenu"
                  class="menu-link-button"
                  :class="{
                    '!text-white': route.meta.menu === menu.meta,
                    '!text-slate-100/80': route.meta.menu !== menu.meta,
                  }"
                  @click="onClickMenu(menu)"
                >
                  {{ menu.name }}
                  <fa-icon
                    v-if="menu.submenu"
                    icon="fa-solid fa-angle-right "
                    :class="{ 'rotate-90 transition transform-gpu ': menu.active }"
                  />
                </button>
                <!-- Internal Menu -->
                <router-link
                  v-if="menu.path"
                  :to="menu.path as string"
                  class="menu-link-button"
                  :class="{
                    '!text-white': route.meta.menu === menu.meta,
                    '!text-slate-100/80': route.meta.menu !== menu.meta,
                  }"
                >
                  {{ menu.name }}
                </router-link>
                <!-- External Menu -->
                <a
                  v-if="menu.link"
                  :href="menu.link as string"
                  target="_blank"
                  class="menu-link-button !text-slate-200/80"
                >
                  {{ menu.name }}
                  <fa-icon icon="fa-solid fa-up-right-from-square" />
                </a>
                <div v-if="menu.submenu && menu.submenu.length > 0">
                  <ul
                    class="transition-all transform-gpu"
                    :class="{
                      'max-h-[1000px] overflow-auto bg-slate-700 p-1 rounded-lg': menu.active,
                      'max-h-0 overflow-hidden': !menu.active,
                    }"
                  >
                    <li v-for="submenu in menu.submenu" :key="submenu.name" class="overflow-hidden">
                      <router-link :to="submenu.path as string" class="submenu-link">
                        <div class="flex items-center space-x-2">
                          <div class="bullet-list" :class="{ 'bg-white': route.meta.submenu === submenu.meta }"></div>
                          <span
                            :class="{
                              '!text-white': route.meta.submenu === submenu.meta,
                              '!text-slate-100/80': route.meta.submenu !== submenu.meta,
                            }"
                          >
                            {{ submenu.name }}
                          </span>
                        </div>
                      </router-link>
                      <div v-if="submenu.separator" class="submenu-separator"></div>
                    </li>
                  </ul>
                </div>
                <div v-if="menu.separator" class="menu-separator"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSidebar } from '@/composable/sidebar'
import { useSidebarStore } from '@/stores/sidebar'
import { useSidebarMenuStore } from '@/stores/sidebar-menu'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'
import ComponentDarkMode from './component-dark-mode.vue'

const sidebarContainerRef = ref(null)

onClickOutside(sidebarContainerRef, () => {
  if (isMobileBreakpoint()) {
    sidebarStore.closeSidebar()
  }
})

const route = useRoute()
const sidebarMenuStore = useSidebarMenuStore()
const sidebarStore = useSidebarStore()
const { isMobileBreakpoint } = useMobileBreakpoint()
const { onClickShortcut, onClickMenu, activeShortcut } = useSidebar()
</script>
