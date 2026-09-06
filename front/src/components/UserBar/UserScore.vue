<template>
  <div class="flex flex-row gap-2 items-center">
    <div class="w-8 h-8 rounded-full bg-yellow-400"></div>
    <div class="border border-gray-500 rounded-lg p-2 min-w-24 text-center">
      {{ game.score }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const game = useGameStore()
</script>
<style scoped></style>
