<script setup>
import { useCostumiereStore } from "../../stores/costumiereStore.js";
const costumiereStore = useCostumiereStore();
// Récupération des donénes métiers des costumes
const { getRealCostumesByType } = storeToRefs(costumiereStore);
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
          class="bg-contain"
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
    <!-- Page Présentation Spectacle-->
    <div
      id="ContainerPresSpec1"
      class="relative min-h-full w-full text-pink-100"
    >
      <div id="ContainerImg3" class="relative min-h-full w-full">
        <NuxtImg
          class="rounded-b-xl bg-contain"
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
    <!--Galerie des photos relative à un spectacle-->
    <div
      class="mt-2 grid grid-cols-3 place-content-start justify-items-center gap-1"
    >
      <NuxtImg
        src="/avions/spitfire2.jpg"
        class="row-span-2 rounded-xl"
        sizes="450"
      />

      <NuxtImg src="/avions/mosquito.jpg" class="rounded-xl" sizes="450" />

      <NuxtImg src="/avions/curtiss.jpg" class="rounded-xl" sizes="450" />

      <NuxtImg
        src="/avions/b25.jpg"
        class="row-span-2 rounded-xl"
        sizes="450"
        format="webp"
      />
      <NuxtImg
        src="/avions/yak1.jpg"
        class="rounded-xl"
        sizes="450"
        format="webp"
      />

      <NuxtImg
        src="/avions/p47.jpg"
        class="rounded-xl"
        sizes="400"
        format="webp"
      />
      <NuxtImg
        src="/avions/hurricaneSol.jpg"
        class="rounded-xl"
        height="400"
        format="webp"
      />
      <NuxtImg
        src="/avions/corsair.jpg"
        alt="Lancaster"
        class="rounded-xl"
        sizes="350"
        format="webp"
      />
      <NuxtImg
        src="/avions/b25Sol.jpg"
        class="rounded-xl"
        sizes="400"
        format="webp"
      />
      <NuxtImg
        src="/avions/mosquito.jpg"
        class="rounded-xl"
        sizes="400"
        format="webp"
      />
    </div>
  </UContainer>
</template>
