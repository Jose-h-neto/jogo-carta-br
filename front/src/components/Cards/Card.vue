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
    class="flex flex-col items-center w-36 border border-gray-300 bg-white rounded-xl shadow-md p-2"
  >
    <div class="flex justify-items-start w-full">
      <span
        class="border border-green-600 bg-green-400 text-white font-semibold text-xs px-2 rounded-xl mb-1"
      >
        {{ cardData.badge }}
      </span>
    </div>

    <figure
      class="h-20 w-full bg-gray-200 rounded-lg mb-1 flex items-center justify-center overflow-hidden"
    >
      <img
        v-if="cardData.image"
        :src="cardData.image"
        :alt="cardData.name"
        class="h-full w-full object-cover"
      />
      <span v-else class="text-gray-500">{{ cardData.image }}</span>
    </figure>

    <h2 class="text-xs font-bold text-center">
      {{ cardData.name }}
    </h2>

    <p class="text-gray-600 mb-1 text-center text-xs">
      {{ cardData.info }}
    </p>

    <time
      class="border border-blue-600 bg-blue-500 text-white font-semibold text-xs px-2 py-0.5 rounded-xl"
    >
      {{ cardData.year }}
    </time>
  </article>
</template>
