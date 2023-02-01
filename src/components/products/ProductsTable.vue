<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'
import CustomButton from '../CustomButton.vue';

const props = defineProps({
  filter: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['editClicked']);

const store = useStore();
const filteredList = computed(() => store.state.products.filter(prod => !props.filter || prod.name.toLowerCase().includes(props.filter.toLowerCase())))

function editClicked(ind) {
  store.commit('setForEdit', { ind });
  setTimeout(() => emit('editClicked'), 500);
}

</script>

<template>
  <table class="w-full table-auto text-center border-black border">
    <thead>
      <tr class="font-bold bg-background-2">
        <th class="w-auto 2xl:w-[33%] py-3 border-black border border-b-0">Name</th>
        <th class="w-auto 2xl:w-[33%] border-black border border-b-0">Price</th>
        <th class="w-auto 2xl:w-[34%] border-black border border-b-0">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ name, price}, ind) in filteredList">
        <td class="py-3 border-black border" :class="{'border-t-0': ind===0}">{{ name }}</td>
        <td class="py-3 border-black border" :class="{'border-t-0': ind===0}">{{ price }}</td>
        <td class="py-3 border-black border" :class="{'border-t-0': ind===0}">
          <CustomButton label="Edit" class="mr-1 mb-1" @click="editClicked(ind)" />
          <CustomButton label="Delete" secondary @click="store.commit('deleteProduct', {ind})" />
        </td>
      </tr>
    </tbody>
  
  </table>

</template>
