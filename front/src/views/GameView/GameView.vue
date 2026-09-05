<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-4">
    <UserBar />
    <Card
      :card-data="{
        badge: 'Início',
        name: 'Card de exemplo',
        info: 'Info do card de exemplo',
        year: '2024',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Getulio_Vargas_%281930%29.jpg/500px-Getulio_Vargas_%281930%29.jpg?utm_source=www.wikidata.org&utm_campaign=rest&utm_content=thumbnail',
      }"
    />
    <Timeline />
    <DragTest />
  </div>
</template>
<script setup lang="ts">
import Card from '@/components/Cards/Card.vue'
import UserBar from '@/components/UserBar/UserBar.vue'
import Timeline from '@/components/Timeline/Timeline.vue'
import DragTest from '@/tests/dragTest.vue'
</script>

<style scoped></style>
