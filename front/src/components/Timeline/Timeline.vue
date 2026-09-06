<template>
  <div
    class="flex flex-row items-center gap-2 h-full min-h-80 w-full p-4 border border-dashed border-gray-400 rounded-lg bg-gray-100 overflow-x-auto"
  >
    <!-- Gap da ponta esquerda -->
    <div
      class="box-content min-w-12 min-h-48 border border-dashed border-gray-400 rounded-xl"
      :class="{ 'flex-1': game.timeline.length === 0 }"
    ></div>

    <!-- Cada carta da timeline + um gap à direita -->
    <template v-for="card in game.timeline" :key="card.id">
      <Card :card-data="card" />
      <div
        class="box-content min-w-12 min-h-48 border border-dashed border-gray-400 rounded-xl"
      ></div>
    </template>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import Card from '@/components/Cards/Card.vue'

const game = useGameStore()
</script>
<style scoped></style>
