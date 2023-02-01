<script setup>
import CustomButton from '../CustomButton.vue'
import HeaderLinks from './HeaderLinks.vue'
</script>

<template>
  <header class="fixed top-0 left-0 right-0 py-4 px-10 sm:px-18 lg:px-24 flex items-center bg-white flex-wrap md:flex-none z-10">
    <div class="text-3xl font-bold">Logo</div>
    <div class="grow " />
    
    <HeaderLinks class="hidden md:block" />
    
    <div class="grow hidden md:block" />
    <CustomButton label="Call to Action" />
    <HeaderLinks class="flex justify-around block pt-5 md:hidden basis-full" />

  </header>
</template>

<style scoped>
</style>
