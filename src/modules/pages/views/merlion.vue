<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          Merlion App
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          A focused strength mapping app. So every person can lead to new opportunities to develop and share skills and
          make new connections.
        </p>
        <a
          href="//merlion.pointhub.app"
          class="bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:focus:ring-red-900 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg focus:ring-4"
        >
          Get started
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="@/assets/icon-merlion.png" alt="mockup" />
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900 my-16 flex flex-col">
    <div class="w-full text-center max-w-4xl mx-auto">
      <h1 class="mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl dark:text-white">
        Merlion App
      </h1>
      <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        Mapping your strength and found your ikigai in 3 steps
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="w-full flex flex-col items-center justify-center space-y-3">
        <h1 class="flex justify-center items-center text-white text-center bg-red-600 rounded-full w-10 h-10">1</h1>
        <p class="text-xl">Capture the activity</p>
        <img src="@/assets/images/capture.png" alt="" class="rounded-lg shadow" />
      </div>
      <div class="w-full flex flex-col items-center justify-center space-y-3">
        <h1 class="flex justify-center items-center text-white text-center bg-red-700 rounded-full w-10 h-10">2</h1>
        <p class="text-xl">Mapping your strength</p>
        <img src="@/assets/images/strength-report.png" alt="" class="rounded-lg shadow" />
      </div>
      <div class="w-full flex flex-col items-center justify-center space-y-3">
        <h1 class="flex justify-center items-center text-white text-center bg-red-800 rounded-full w-10 h-10">3</h1>
        <p class="text-xl">Found your ikigai</p>
        <img src="@/assets/images/ikigai-report.png" alt="" class="rounded-lg shadow" />
      </div>
    </div>
  </section>
</template>
