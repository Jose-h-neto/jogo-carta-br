<script setup lang="ts">
import { useGameStore } from '@/stores/game'

const game = useGameStore()
</script>

<template>
  <div class="flex flex-row gap-2">
    <div v-for="n in game.lives" :key="n" class="w-8 h-8 rounded-full bg-red-400"></div>
  </div>
</template>
<style scoped></style>
