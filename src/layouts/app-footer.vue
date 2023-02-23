<template>
  <section id="bottom-navigation" class="block border-t dark:bg-slate-800 mt-10">
    <div class="bg-primary">
      <div class="container mx-auto p-4">
        <div class="flex flex-col">
          <!-- BOTTOM FOOTER -->
          <div class="flex flex-col sm:flex-row justify-between">
            <div class="font-semibold">
              <router-link to="/">Pointhub.app</router-link>
            </div>
            <div class="flex flex-row space-x-5">
              <router-link to="/terms">Terms & Condition</router-link>
              <router-link to="/privacy">Privacy Policy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
