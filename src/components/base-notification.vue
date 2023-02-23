<template>
  <notifications position="bottom right" :duration="5000">
    <template #body="props">
      <div class="flex shadow overflow-hidden rounded-lg m-2 bg-white dark:bg-slate-600 space-x-2 px-4">
        <div class="flex flex-col flex-1 py-2">
          <div class="flex items-center justify-between space-x-2">
            <h4 class="font-bold">{{ props.item.title }}</h4>
            <button class="btn" @click="props.close">
              <fa-icon icon="fa-solid fa-close"></fa-icon>
            </button>
          </div>
          <p class="text-slate-800 dark:text-slate-100">{{ props.item.text }}</p>
        </div>
      </div>
    </template>
  </notifications>
  <!-- Warning -->
  <notifications group="warning" position="bottom right" :duration="5000">
    <template #body="props">
      <div class="flex shadow overflow-hidden rounded-lg m-2 bg-white dark:bg-slate-600 space-x-2 px-4">
        <div class="flex items-start py-4 pr-2">
          <fa-icon icon="fa-solid fa-warning h-6 w-6"></fa-icon>
        </div>
        <div class="flex flex-col flex-1 py-2">
          <div class="flex items-center justify-between space-x-2">
            <h4 class="font-bold">{{ props.item.title }}</h4>
            <button class="btn" @click="props.close">
              <fa-icon icon="fa-solid fa-close"></fa-icon>
            </button>
          </div>
          <p class="text-slate-800 dark:text-slate-100">{{ props.item.text }}</p>
        </div>
      </div>
    </template>
  </notifications>
  <!-- Success -->
  <notifications group="success" position="bottom right" :duration="5000">
    <template #body="props">
      <div class="flex shadow overflow-hidden rounded-lg m-2 bg-white dark:bg-slate-600 space-x-2 px-4">
        <div class="flex items-start py-4 pr-2">
          <fa-icon icon="fa-solid fa-circle-check h-6 w-6"></fa-icon>
        </div>
        <div class="flex flex-col flex-1 py-2">
          <div class="flex items-center justify-between space-x-2">
            <h4 class="font-bold">{{ props.item.title }}</h4>
            <button class="btn" @click="props.close">
              <fa-icon icon="fa-solid fa-close"></fa-icon>
            </button>
          </div>
          <p class="text-slate-800 dark:text-slate-100">{{ props.item.text }}</p>
        </div>
      </div>
    </template>
  </notifications>
  <!-- Info -->
  <notifications group="info" position="bottom right" :duration="5000">
    <template #body="props">
      <div class="flex shadow overflow-hidden rounded-lg m-2 bg-white dark:bg-slate-600 space-x-2 px-4">
        <div class="flex items-start py-4 pr-2">
          <fa-icon icon="fa-solid fa-circle-info h-6 w-6"></fa-icon>
        </div>
        <div class="flex flex-col flex-1 py-2">
          <div class="flex items-center justify-between space-x-2">
            <h4 class="font-bold">{{ props.item.title }}</h4>
            <button class="btn" @click="props.close">
              <fa-icon icon="fa-solid fa-close"></fa-icon>
            </button>
          </div>
          <p class="text-slate-800 dark:text-slate-100">{{ props.item.text }}</p>
        </div>
      </div>
    </template>
  </notifications>
</template>

<script setup lang="ts"></script>
