<script setup lang="ts">
import Card from '@/components/Cards/Card.vue'
</script>

<template>
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
</template>

<style scoped></style>
