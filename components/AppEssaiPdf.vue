<script setup>
const spectacleStore = useItemsUtabsStore().data;
</script>

<template>
  <div class="mx-auto mt-2 p-5 text-center">
    <p class="mt-5 text-white"></p>
    <NuxtLink to="/pdf/BookDocu1.pdf" target="_blank">
      <UButton label="Mémoires du Monde" size="lg"></UButton>
    </NuxtLink>
  </div>
  <div class="flex justify-center">
    <div class="mt-2 p-5 text-center">
      <p class="mt-5 text-white"></p>
      <NuxtLink to="/pdf/flipPdf1/Alice Oudet Costumes1.html" target="_blank">
        <UButton label="Costumes-Proposition 1" size="lg"></UButton>
      </NuxtLink>
    </div>
    <div class="mt-2 p-5 text-center">
      <p class="mt-5 text-white"></p>
      <NuxtLink to="/pdf/flipPdf2/Alice Oudet Costumes2.html" target="_blank">
        <UButton label="Costumes-Proposition 2" size="lg"></UButton>
      </NuxtLink>
    </div>
    <div class="mt-2 p-5 text-center">
      <p class="mt-5 text-white"></p>
      <NuxtLink to="/pdf/flipPdf3/Alice Oudet Costumes3.html" target="_blank">
        <UButton label="Costumes-Proposition 3" size="lg"></UButton>
      </NuxtLink>
    </div>
    <div class="mt-2 p-5 text-center">
      <p class="mt-5 text-white"></p>
      <NuxtLink to="/pdf/flipPdf4/Alice Oudet Costumes4.html" target="_blank">
        <UButton label="Costumes-Proposition 4" size="lg"></UButton>
      </NuxtLink>
    </div>

  </div>
</template>
