<script setup>
import ResponsiveLayout from '../ResponsiveLayout.vue';
import TitleDescSection from './TitleDescSection.vue';

</script>

<template>
  <ResponsiveLayout class="gap-x-10 gap-y-10 justify-center">
    <div class="md:basis-4/12">
      <TitleDescSection>
        <template v-slot:title>
          Header Text
        </template>
        <template v-slot:desc>
          Lorem ipsum dolor sit amet, consectur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim dolor.
        </template>
      </TitleDescSection>
    </div>
    <div class="basis-4/12 flex justify-center items-center">
      <div class="h-56 w-56 md:h-80 md:w-80 lg:w-96 lg:h-96 bg-img-color-2"></div>
    </div>
    <div class="md:basis-4/12 flex flex-col-reverse ">
      <TitleDescSection>
        <template v-slot:title>
          Header Text
        </template>
        <template v-slot:desc>
          Lorem ipsum dolor sit amet, consectur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna
          fringilla urna, porttitor rhoncus dolor purus non enim dolor.
        </template>
      </TitleDescSection>
    </div>
  </ResponsiveLayout>

</template>
