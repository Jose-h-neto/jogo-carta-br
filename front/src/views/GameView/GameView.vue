<template>
  <div class="flex flex-col min-h-screen pt-24 p-4 gap-4">
    <UserBar />
    <!-- Mão e Deck-->
    <div class="flex flex-row justify-between items-start gap-4 w-full">
      <!-- Mão do jogador -->
      <div id="hand" class="flex flex-row flex-wrap gap-4 p-4 border border-gray-300 rounded-lg">
        <!-- Drop Zone 01 -->
        <div
          class="w-36 min-h-48 border border-dashed border-gray-200 rounded-lg flex items-center justify-center"
        >
          <!-- Card 01 -->
          <Card
            :card-data="{
              badge: 'Início',
              name: 'Card de exemplo',
              info: 'Info do card de exemplo',
              year: '2024',
              image: '',
            }"
          />
        </div>
        <!-- Drop Zone 02 -->
        <div
          class="w-36 min-h-48 border border-dashed border-gray-200 rounded-lg flex items-center justify-center"
        >
          <!-- Card 02 -->
        </div>
        <!-- Drop Zone 03 -->
        <div
          class="w-38 min-h-48 border border-dashed border-gray-200 rounded-lg flex items-center justify-center"
        >
          <!-- Card 03 -->
        </div>
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
    <div class="flex flex-row w-full flex-1">
      <!-- Timeline -->
      <Timeline />
    </div>
  </div>
</template>
<script setup lang="ts">
import Card from '@/components/Cards/Card.vue'
import UserBar from '@/components/UserBar/UserBar.vue'
import Timeline from '@/components/Timeline/Timeline.vue'
</script>

<style scoped></style>
