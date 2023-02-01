<script setup>
</script>

<template>
  <div class="flex flex-col gap-y-5 pr-10 justify-center">
      <h1 class="text-5xl font-bold">
        <slot name="title"></slot>
      </h1>
      <span class="font-light">
        <slot name="desc"></slot>
      </span>
      <div class="flex gap-2">
        <slot name="buttons"></slot>
      </div>
    </div>
</template>
