<script setup>
import { ref, watch, computed } from 'vue';
import { useStore } from 'vuex'
import CustomButton from '../CustomButton.vue';

const name = ref();
const price = ref();
const store = useStore();
const forEdit = computed(() => store.state.forEdit);

function clearForm() {
  name.value = null;
  price.value = null;
}

watch(forEdit, () => {
  if(forEdit.value != null) {
    name.value = store.state.products[forEdit.value].name;
    price.value = store.state.products[forEdit.value].price;
  }
});

</script>

<template>
  <div class="w-full p-10 flex flex-col gap-y-7 items-center text-center bg-background-2">
    <div class="w-full flex flex-col gap-y-3 items-center">
      <h2 class="font-bold text-3xl">Header Text</h2>
      <span class="font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aaa
      </span>
    </div>
    <div class="w-full flex flex-col gap-y-3 items-center">
      <input class="rounded-md py-2 px-3 w-full" placeholder="Name" v-model="name" />
      <input class="rounded-md py-2 px-3 w-full" placeholder="Price" v-model="price" />
      <CustomButton class="w-full" :label="store.state.forEdit ? 'Save': 'Create'"
        :disabled="!name || !price"
        @click="store.commit(store.state.forEdit ? 'editProduct' : 'addProduct', { product: { name, price } }); clearForm()"
        />
    </div>
  </div>

</template>
