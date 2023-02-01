<script setup>
import FooterSection from './components/FooterSection.vue';
import StickyHeader from './components/header/StickyHeader.vue'
</script>

<template>
  <div class="relative">
    <StickyHeader />
    <RouterView class="md:pt-32" />
    <FooterSection class="mt-60"/>
  </div>
</template>

<style scoped>
</style>
