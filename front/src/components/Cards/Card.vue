<script setup lang="ts">
interface CardData {
  badge: string
  name: string
  info: string
  year: string
  image?: string
}

defineProps<{
  cardData: CardData
}>()
</script>

<template>
  <article
    class="flex flex-col items-center w-64 border border-gray-300 bg-white rounded-xl shadow-md p-4"
  >
    <div class="flex justify-items-start w-full">
      <span
        class="border border-green-600 bg-green-400 text-white font-semibold text-sm px-4 rounded-xl mb-2"
      >
        {{ cardData.badge }}
      </span>
    </div>

    <figure
      class="h-40 w-full bg-gray-200 rounded-lg mb-2 flex items-center justify-center overflow-hidden"
    >
      <img
        v-if="cardData.image"
        :src="cardData.image"
        :alt="cardData.name"
        class="h-full w-full object-cover"
      />
      <span v-else class="text-gray-500">{{ cardData.image }}</span>
    </figure>

    <h2 class="text-base font-bold text-center">
      {{ cardData.name }}
    </h2>

    <p class="text-gray-600 mb-2 text-center">
      {{ cardData.info }}
    </p>

    <time
      class="border border-blue-600 bg-blue-500 text-white font-semibold text-sm px-4 py-1 rounded-xl"
    >
      {{ cardData.year }}
    </time>
  </article>
</template>
