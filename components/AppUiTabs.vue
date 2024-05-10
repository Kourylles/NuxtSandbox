<script setup>
const spectacleStore = useItemsUtabsStore().data;
</script>

<template>
  <div>
    <UTabs :items="spectacleStore">
      <template #item="{ item }">
        <div v-if="item.key === 'documentaires'">
          <div class="p-2 italic font-bold text-center">
            {{ item.description }}
          </div>
          <div
            v-for="(element, index) in item.elements"
            :key="index"
            class="flex flex-col items-center mx-auto mt-5"
          >
            <div
              class="w-1/4 p-2 text-center text-white border border-green-700 border-solid bg-slate-400"
            >
              {{ element.titre }}
              <br />
              {{ element.blabla }}
            </div>
          </div>
        </div>
        <div v-else-if="item.key === 'publicités'">
          <div class="p-2 italic font-bold text-center">
            {{ item.description }}
          </div>

          <div
            v-for="(element, index) in item.elements"
            :key="index"
            class="flex flex-col items-center mx-auto mt-5"
          >
            <div
              class="w-1/4 p-2 text-center text-white bg-green-900 border border-solid border-slate-400"
            >
              {{ element.blabla }}
              <br />
              {{ element.titre }}
            </div>
          </div>
        </div>
        <div v-else>
          <div class="p-2 italic font-bold text-center">
            {{ item.description }}
          </div>

          <div
            v-for="(element, index) in item.elements"
            :key="index"
            class="flex flex-col items-center mx-auto mt-5"
          >
            <div
              class="w-1/4 p-2 text-center text-white bg-yellow-500 border-2 border-orange-600 border-solid"
            >
              {{ element.titre }}
              <br />
              {{ element.blabla }}
            </div>
          </div>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<style lang="scss" scoped></style>
