<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white"
        >
          <span class="text-green-700">Growing Business</span> Needs a Growing Platform
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Pointhub.app helps your business to build reliable apps for your business needs
        </p>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="@/assets/images/office-long-1.png" alt="mockup" class="h-[300px] rounded-xl" />
        <img src="@/assets/images/office-long-2.png" alt="mockup" class="h-[300px] rounded-xl mt-10 ml-5" />
      </div>
    </div>
  </section>
  <section id="products" class="bg-white dark:bg-gray-900 space-y-10">
    <h1 class="font-extrabold text-3xl">Products</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="card pt-4">
        <div class="border-b px-5 pb-2">
          <h2>Merlion App</h2>
        </div>
        <div class="h-52 text-center">
          <img src="@/assets/images/strength-mapping-menu.png" alt="" class="h-52" />
        </div>
        <div class="flex justify-around uppercase">
          <router-link to="/products/merlion" class="py-2 text-center w-full">info</router-link>
          <a href="//merlion.pointhub.app" class="py-2 text-center w-full">open app</a>
        </div>
      </div>
      <div class="card pt-4">
        <div class="border-b px-5 pb-2">
          <h2>Coming soon</h2>
        </div>
        <div class="h-52 text-center"></div>
        <div class="flex justify-around uppercase">
          <router-link to="#" class="py-2 text-center w-full">...</router-link>
          <a href="#" class="py-2 text-center w-full">...</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
