<template>
  <div class="flex flex-row justify-between bg-gray-200 p-6 w-full fixed top-0 left-0 right-0 z-50">
    <!-- Aqui vai ficar a vida -->
    <LifeBar />
    <!-- Aqui vai ficar o score -->
    <UserScore />
  </div>
</template>
<script setup lang="ts">
import LifeBar from '@/components/UserBar/LifeBar.vue';
import UserScore from '@/components/UserBar/UserScore.vue';
</script>
<style scoped></style>
