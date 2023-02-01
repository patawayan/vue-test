<script setup>
import CustomButton from '../CustomButton.vue';
import ResponsiveLayout from '../ResponsiveLayout.vue';
import TitleDescActionLayout from './TitleDescActionLayout.vue';

</script>

<template>
  <ResponsiveLayout class="justify-center">
    <TitleDescActionLayout class="basis-full md:basis-6/12 py-36 md:py-0">
      <template v-slot:title>
        Lorem ipsum dolor sit amet consectetur
      </template>
      <template v-slot:desc>
        Lorem ipsum dolor sit amet consectetur adipscing elit ut aliquam, purus sit amet luctus venenatis, lectus
      </template>
      <template v-slot:buttons>
        <CustomButton label="Call to Action" />
        <CustomButton secondary label="See Workspace" />
      </template>
    </TitleDescActionLayout>
    <div class="basis-full md:basis-6/12 relative flex justify-center scale-75 md:scale-100 -z-10">
      <div class="relative">
        <div class=" h-[400px] w-[400px] bg-img-color-1 mt-20"></div>
        <div class="absolute  top-0 -right-[10px] h-40 w-40  bg-img-color-2"></div>
      </div>
    </div>
  </ResponsiveLayout >

</template>
