<script setup>
const dataStore = useDataStore().data;
</script>

<template>
  <div class="flex flex-col items-center gap-4 p-2 text-center capitalize">
    <div
      v-for="(pax, index) in dataStore"
      :key="index"
      class="border-primary w-60 border-2 bg-slate-400 p-5 text-center text-gray-100"
    >
      {{ pax.prenom }} {{ pax.nom }} <br />
      {{ pax.adresse }}
    </div>
  </div>
  <div>
    <AppBackButton />
  </div>
</template>

<style lang="scss" scoped></style>
