<script setup></script>

<template>
  <div>
    <UContainer>
      <div
        class="border-primary mx-auto mt-52 flex h-2/3 w-fit flex-row justify-center gap-2 rounded-lg border-4 bg-slate-300 p-4 font-extrabold text-slate-200"
      >
        <UButton to="/nuxtUiTabs" label="NuxtUI Tabs" />
        <UButton to="/pinia" label="PINIA" />
        <UButton to="/essaiPdf" label="PDF" />
        <UButton to="/galerie" label="Galerie" />
        <UButton to="/calendrier" label="Calendrier" />
      </div>
    </UContainer>
  </div>
</template>
