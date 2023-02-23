<template>
  <ul class="scrollbar-hidden flex overflow-x-auto items-center gap-2">
    <li v-for="(breadcrumb, index) in props.breadcrumbs" :key="index" class="flex justify-center items-center gap-2">
      <router-link
        class="text-primary hover:text-primary-focus dark:text-accent-light dark:hover:text-accent lowercase whitespace-nowrap transition-colors"
        :class="{ 'text-blue-500': breadcrumb.path }"
        :to="breadcrumb.path ?? '#'"
      >
        {{ breadcrumb.name }}
      </router-link>
      <fa-icon
        v-if="index + 1 < breadcrumbs.length"
        icon="fa-solid fa-angle-right w-3 h-3"
        :class="{ '!text-blue-500': breadcrumb.path }"
      ></fa-icon>
    </li>
  </ul>
</template>

<script lang="ts">
interface Breadcrumb {
  name: string
  path?: string
}
</script>

<script setup lang="ts">
const props = defineProps<{
  breadcrumbs: Breadcrumb[]
}>()
</script>
