import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Card } from '@/types/card'

/* const exemplo: Card = {
  id: '1',
  badge: 'Início',
  name: 'Card de exemplo',
  info: 'Info do card de exemplo',
  year: '2024',
} */

export const useGameStore = defineStore('game', () => {
  const hand = ref<(Card | null)[]>([
    {
      id: '1',
      badge: 'Início',
      name: 'Card de exemplo',
      info: 'Info do card de exemplo',
      year: '2024',
    },
    {
      id: '2',
      badge: 'Início',
      name: 'Card de exemplo',
      info: 'Info do card de exemplo',
      year: '2023',
    },
    {
      id: '3',
      badge: 'Início',
      name: 'Card de exemplo',
      info: 'Info do card de exemplo',
      year: '2022',
    },
  ])
  const deck = ref<Card[]>([])
  const timeline = ref<Card[]>([])
  const score = ref<number>(0)
  const lives = ref<number>(3)

  return { hand, deck, timeline, score, lives }
})
