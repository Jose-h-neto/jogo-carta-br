<template>
  <div class="flex flex-col min-h-screen mx-auto max-w-7xl pt-24 p-4 gap-4">
    <UserBar />
    <!-- Mão e Deck-->
    <div class="flex flex-row justify-between gap-4 w-full items-center">
      <!-- Mão do jogador -->
      <div id="hand" class="flex flex-row flex-wrap gap-4 p-4 border border-gray-300 rounded-lg">
        <Draggable
          v-model="game.hand"
          item-key="id"
          handle=".card-handle"
          ghost-class="slot-ghost"
          drag-class="slot-float"
          :force-fallback="true"
          class="flex flex-row flex-wrap gap-4"
        >
          <template #item="{ element }">
            <div
              class="box-content w-36 p-1 min-h-48 border border-dashed border-gray-300 rounded-xl flex items-center justify-center"
            >
              <Card v-if="element" :card-data="element" />
            </div>
          </template>
        </Draggable>
      </div>
      <!-- Deck -->
      <div id="deck" class="relative w-36 min-h-48 cursor-pointer">
        <div
          class="absolute inset-0 translate-x-1 translate-y-1 rounded-lg border border-gray-400 bg-gray-100"
        ></div>
        <div
          class="absolute inset-0 translate-x-0.5 translate-y-0.5 rounded-lg border border-gray-400 bg-gray-100"
        ></div>
        <div class="absolute inset-0 rounded-lg border border-gray-400 bg-gray-100"></div>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center w-full flex-1">
      <!-- Drop zone da partida -->
      <div class="w-full h-full">
        <Timeline />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Draggable from 'vuedraggable'
import Card from '@/components/Cards/Card.vue'
import UserBar from '@/components/UserBar/UserBar.vue'
import Timeline from '@/components/Timeline/Timeline.vue'
import { useGameStore } from '@/stores/game'

const game = useGameStore()
</script>

<style scoped>
:deep(.slot-ghost) {
  opacity: 1;
  background-color: transparent;
}

:deep(.slot-ghost .card-handle) {
  visibility: hidden;
}

:deep(.slot-float) {
  border-color: transparent !important;
  background: transparent !important;
  padding: 0 !important;
  box-shadow: none !important;
}
</style>
