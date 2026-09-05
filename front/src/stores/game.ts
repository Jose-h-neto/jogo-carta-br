import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Card } from '@/types/card'

const exemplo: Card = {
  badge: 'Início',
  name: 'Card de exemplo',
  info: 'Info do card de exemplo',
  year: '2024',
}

export const useGameStore = defineStore('game', () => {
  const hand = ref<(Card | null)[]>([{ ...exemplo }, null, null])
  const deck = ref<Card[]>([])
  const timeline = ref<Card[]>([])
  const score = ref<number>(0)
  const lives = ref<number>(3)

  return { hand, deck, timeline, score, lives }
})
