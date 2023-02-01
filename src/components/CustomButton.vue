<script setup>
const props = defineProps({
  label: String,
  secondary: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});


</script>

<template>
  <button 
    :disabled="disabled"
    :class="{ 
      'outline outline-1 hover:bg-background-2 disabled:bg-background-2 bg-white text-black': secondary, 
      'bg-text text-white hover:bg-button disabled:bg-button': !secondary
    }"
    class=" text-sm py-2 px-8 rounded-md"
  >
    {{ label }}
  </button>
</template>

<style scoped>

</style>
