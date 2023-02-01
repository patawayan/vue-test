<script setup>
  const links = [
    ['/', 'Home'],
    ['/', 'About'],
    ['/', 'Services'],
    ['/products', 'Products'],
  ]

function scrollToTop() {
  window.scrollTo(0, 0);
}
</script>

<template>
  <div>
    <RouterLink v-for="[link, label] in links" :key="label" :to="link" @click="scrollToTop"
      class="bg-white hover:bg-background-2 rounded-md text-center py-2 px-2 md:px-5">
      {{ label }}
    </RouterLink>
  </div>
</template>

<style scoped>

</style>
