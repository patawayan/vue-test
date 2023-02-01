<script setup>
import { ref } from 'vue';
import ProductAdd from '../components/products/ProductAdd.vue';
import ProductsTable from '../components/products/ProductsTable.vue';
import ResponsiveLayout from '../components/ResponsiveLayout.vue';


const search = ref('');
const addModal = ref(null);



</script>

<template>
  <ResponsiveLayout class="flex flex-col gap-36 pt-48">
    <div class="flex flex-col w-full gap-10">
      <div class="flex w-full ">
        <div class="flex basis-full md:basis-6/12 flex-wrap sm:flex-nowrap gap-y-2">
          <h1 class="text-5xl font-bold grow">
            Products
          </h1>
          <div class="grow"></div>
          <input class="text-sm p-3 w-full sm:w-auto outline outline-1 rounded-md" placeholder="Search for keywords..." v-model="search" />
        </div>
      </div>
      <div class="flex w-full flex-wrap md:flex-nowrap gap-y-16">
        <ProductsTable class="basis-full md:basis-6/12" :filter="search" @editClicked="addModal.scrollIntoView(false)" />
        <div class="basis-full md:basis-6/12 pl-0 md:pl-24 items-center" ref="addModal">
          <ProductAdd />
        </div>
      </div>
    </div>
    
  </ResponsiveLayout>
</template>
