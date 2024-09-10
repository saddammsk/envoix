<script setup lang="ts">
</script>

<template>
  <header class="lg:pt-14 md:pt-8 pt-4 absolute top-0 left-0 w-full">
    <nav>
      <div class="max-w-[1728px] 3xl:px-[160px] 2xl:px-20 xl:px-10 md:px-8 px-4 flex flex-wrap items-center justify-between mx-auto">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="@/assets/images/logo.svg" class="lg:w-auto md:w-[172px] w-[104px]" alt="Flowbite Logo">
        </a>
        <div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <button type="button" class="text-white lg:block hidden text-lg leading-[27px] rounded-[5px] font-bold bg-btn-bg py-1.5 px-[30px] transtion ease-in-out duration-500 hover:opacity-70">Anmelden</button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center lg:text-start lg:py-0 py-12 text-center lg:static absolute top-20 bg-white left-0 lg:shadow-none shadow-2xl justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky">
          <ul class="flex flex-col rtl:space-x-reverse lg:flex-row">
            <li>
              <a href="#pricing" class="block lg:pb-0 pb-4 text-lg transition-all ease-out duration-500 hover:text-blue-1000 font-bold px-[15px] text-black">Preisgestaltung</a>
            </li>
            <li>
              <a href="#feature" class="block lg:pb-0 pb-4 text-lg transition-all ease-out duration-500 hover:text-blue-1000 font-bold px-[15px] text-black">Funktionen</a>
            </li>
            <li class="lg:hidden block">
              <button type="button" class="text-white text-lg leading-[27px] rounded-[5px] font-bold bg-btn-bg py-1.5 px-[30px] transtion ease-in-out duration-500 hover:opacity-70">Anmelden</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
html {
  scroll-behavior: smooth; /* Ensures smooth scrolling */
}
</style>
