<script setup>
import { useCostumiereStore } from "../../stores/costumiereStore.js";
const costumiereStore = useCostumiereStore();
// Récupération des donénes métiers des costumes
const { getRealCostumesByType } = storeToRefs(costumiereStore);
console.log("hello");
</script>

<template>
  <UContainer class="bg-slate-100 p-2">
    <!--Page de présentation-->
    <div id="ContainerImg1" class="relative min-h-full w-full">
      <div id="ContainerImg1" class="relative min-h-full w-full">
        <NuxtImg
          class="rounded-t-xl bg-contain"
          src="/avions/p51.jpg"
          alt="Photo présentation Alice costumières"
          format="webp"
        />
        <div
          class="bg-deepBlue-500 Z-10 absolute left-4 top-14 flex w-5/12 flex-col justify-center rounded-3xl bg-opacity-35 p-5 font-bold backdrop-blur-lg"
          id="TextImg1"
        >
          <div class="py-60 text-center text-3xl text-pink-100">
            <p>ALICE OUDET</p>
            <p class="text-7xl">Costumière</p>
            <p class="mt-8">06 67 09 65 35</p>
          </div>
        </div>
      </div>
    </div>
    <!--Page expérience pro-->
    <div id="ContainerImg2" class="relative min-h-full w-full text-pink-100">
      <div id="ContainerImg2" class="relative min-h-full w-full">
        <NuxtImg
          class="bg-contain"
          src="/avions/spitblack.jpg"
          alt="Photo présentation Alice costumières"
          loading="lazy"
          format="webp"
        />
        <div
          class="bg-deepBlue-500 Z-10 absolute right-4 top-14 flex w-auto flex-col justify-center rounded-3xl bg-opacity-35 p-5 backdrop-blur-lg"
          id="TextImg2"
        >
          <div class="text-lightPink-500 py-5 text-right text-3xl">
            <p class="text-2xl font-extrabold uppercase">
              expériences professionnelles
            </p>
            <br />
            <p class="mt-1 text-base font-extrabold uppercase italic">
              Créations et Confection pour :
            </p>
            <p class="text-base italic">
              {{ costumiereStore.data.plageDate1 }}
            </p>
            <p
              class="text-xl"
              v-for="(realisation, index) in getRealCostumesByType(
                'Créations et confection',
              )"
              :key="index"
            >
              <span class="font-bold capitalize"
                >{{ realisation.titre }} -
              </span>
              <span class="capitalize italic">{{ realisation.auteur }} - </span>
              <span>{{ realisation.metteurScene }}</span>
            </p>
            <br />
            <p class="mt-1 text-base font-extrabold uppercase italic">
              Assistante à la création et confection :
            </p>

            <p
              class="text-xl"
              v-for="(realisation, index) in getRealCostumesByType(
                'Assistant à la création et confection',
              )"
              :key="index"
            >
              <span class="font-bold capitalize"
                >{{ realisation.titre }} -
              </span>
              <span class="capitalize italic">{{ realisation.auteur }} - </span>
              <span>{{ realisation.metteurScene }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Formation-->
    <div
      id="ContainerFormation"
      class="relative min-h-full w-full text-pink-100"
    >
      <div id="ContainerImg3" class="relative min-h-full w-full">
        <NuxtImg
          class="rounded-b-xl bg-contain"
          src="/avions/hurricane.jpg"
          alt="Photo formation Alice costumières"
          format="webp"
        />
        <div
          class="bg-deepBlue-500 Z-10 absolute right-4 top-5 flex w-auto flex-col justify-center rounded-3xl bg-opacity-35 p-5 backdrop-blur-lg"
          id="TextImg3"
        >
          <div class="text-lightPink-500 py-16 text-right text-3xl">
            <p class="text-2xl font-extrabold uppercase">formation</p>
            <br />
            <p class="text-base italic">
              {{ costumiereStore.data.plageDate2 }}
            </p>
            <p class="text-xl">
              <span class="font-bold capitalize"
                >{{ costumiereStore.data.formations[0].intitule }} -
              </span>
              <span class="capitalize italic"
                >{{ costumiereStore.data.formations[0].lieu }}
              </span>
            </p>
            <br />
            <p class="text-base italic">
              {{ costumiereStore.data.plageDate3 }}
            </p>
            <p class="text-xl">
              <span class="font-bold capitalize"
                >{{ costumiereStore.data.formations[1].intitule }} -
              </span>
              <span class="capitalize italic"
                >{{ costumiereStore.data.formations[1].lieu }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Présentation Spectacle 1-->
    <div
      id="ContainerPresSpec1"
      class="relative mt-4 min-h-full w-full text-pink-100"
    >
      <div id="ContainerImg3" class="relative mt-2 min-h-full w-full">
        <NuxtImg
          class="rounded-xl bg-contain"
          src="/avions/corsair.jpg"
          alt="Photo formation Alice costumières"
          format="webp"
        />
        <div
          class="bg-deepBlue-500 Z-10 absolute right-6 top-28 flex w-auto flex-col justify-center rounded-3xl bg-opacity-35 p-5 backdrop-blur-lg"
          id="TextImg3"
        >
          <div class="text-lightPink-500 py-16 text-center text-3xl">
            <p class="text-4xl font-extrabold capitalize">a christmas carol</p>
            <br />
            <p class="mt-28 text-3xl">
              <span class="font-bold"> Costumes pour Marionettes </span>
            </p>
            <br />
            <p class="mt-10 text-2xl capitalize italic">
              Cie Bric à Brac
              <br />
              <span class="capitalize italic">2018 </span>
            </p>
            <br />
            <p class="text-xl">
              <span class="italic"
                >Design et confection des masques et marionettes :
              </span>
              <br />
              <span>Marina Coudray</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--Galerie des photos relative au spectacle 1-->
    <div class="mt-4 columns-3">
      <NuxtImg
        src="/avions/spitfire2.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
      />

      <NuxtImg
        src="/avions/mosquito.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
      />

      <NuxtImg
        src="/avions/Corsair.jpg"
        alt="Lancaster"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/curtiss.jpg"
        class="mb-4 h-auto w-full rounded-xl"
      />

      <NuxtImg
        src="/avions/b25.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/yak1.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />

      <NuxtImg
        src="/avions/p47.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/hurricaneSol.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/b25Sol.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/mosquito.jpg"
        class="mb-4 block h-auto w-full rounded-xl"
        format="webp"
      />
    </div>
    <!-- Page Présentation Spectacle 2 -->
    <!--     <div
      id="ContainerPresSpec2"
      class="relative w-full min-h-full mt-2 text-pink-100"
    >
      <div id="ContainerImg3" class="relative w-full min-h-full">
        <NuxtImg
          class="bg-contain rounded-xl"
          src="/avions/hurricane.jpg"
          alt="Photo formation Alice costumières"
          format="webp"
        />
        <div
          class="absolute flex flex-col justify-center w-auto p-5 bg-deepBlue-500 Z-10 right-6 top-28 rounded-3xl bg-opacity-35 backdrop-blur-lg"
          id="TextImg3"
        >
          <div class="py-16 text-3xl text-center text-lightPink-500">
            <p class="text-4xl font-extrabold capitalize">george dandin</p>
            <br />
            <p class="text-3xl mt-28">
              <span class="font-bold">
                Travail basé sur les peintures <br />de Grant Wood</span
              >
            </p>
            <br />
            <p class="mt-10 text-2xl italic capitalize">
              La Troupe Solilès
              <br />
              <span class="italic capitalize">2017 </span>
            </p>
            <br />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Phtos relatives au spectacle 2-->
    <!--     <div class="mt-2 columns-3">
      <NuxtImg
        src="/avions/spitfire2.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
      />

      <NuxtImg
        src="/avions/mosquito.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
      />

      <NuxtImg
        src="/avions/Corsair.jpg"
        alt="Lancaster"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/curtiss.jpg"
        class="w-full h-auto mb-2 rounded-xl"
      />

      <NuxtImg
        src="/avions/b25.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/yak1.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />

      <NuxtImg
        src="/avions/p47.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/hurricaneSol.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/b25Sol.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />
      <NuxtImg
        src="/avions/mosquito.jpg"
        class="block w-full h-auto mb-2 rounded-xl"
        format="webp"
      />
    </div> -->
  </UContainer>
</template>
