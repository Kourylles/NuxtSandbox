<script setup></script>

<template>
  <div>
    <UContainer>
      <div
        class="border-primary mx-auto mt-52 flex h-2/3 w-2/3 flex-row gap-2 rounded-lg border-4 bg-slate-300 p-4 font-extrabold text-slate-200"
      >
        <UButton to="/nuxtUiTabs" label="NuxtUI Tabs" />
        <UButton to="/pinia" label="PINIA" />
        <UButton to="/essaiPdf" label="PDF" />
        <UButton to="/galerie" label="Galerie" />
      </div>
    </UContainer>
  </div>
</template>
