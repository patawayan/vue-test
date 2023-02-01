<script setup>
import CustomButton from './CustomButton.vue';
import TitleDescActionLayout from './home/TitleDescActionLayout.vue';
</script>

<template>
  <footer class="flex bg-background-2 mt-52 flex-wrap md:flex-nowrap -z-10">
    <div class="basis-full md:basis-6/12 relative flex justify-center">
      <div class="h-56 w-56 md:h-80 md:w-80 lg:w-96 lg:h-96 bg-img-color-2 relative -top-10"></div>
    </div>
    <TitleDescActionLayout class="basis-full md:basis-6/12 px-10 pb-10 sm:pt-10 justify-center">
      <template v-slot:title>
        Lorem ipsum dolor sit consectetur
      </template>
      <template v-slot:desc>
        Lorem ipsum dolor sit amet, consectetur adipscing elit ut aliquam, purus sit amet luctus venenatis, lectus
      </template>
      <template v-slot:buttons>
        <CustomButton label="Call to Action" />
      </template>
    </TitleDescActionLayout> 
  </footer>

</template>

