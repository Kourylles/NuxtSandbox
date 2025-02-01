<script setup>
const spectacleStore = useItemsUtabsStore().data;
</script>

<template>
  <div class="mx-auto mt-2 p-5 text-center">
    <p class="mt-5 text-white"></p>
    <NuxtLink to="/pdf/BookDocu1.pdf" target="_blank">
      <UButton label="Doc" size="lg"></UButton>
    </NuxtLink>
  </div>
  <div class="mx-auto mt-2 p-5 text-center">
    <p class="mt-5 text-white"></p>
    <NuxtLink to="/pdf/flipPdf/Alice Oudet Costumes.html" target="_blank">
      <UButton label="FlipPdf" size="lg"></UButton>
    </NuxtLink>
  </div>
</template>
