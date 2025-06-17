import { Character } from "@/types"

export const characters: Character[] = [
  {
    name: "Берсерк",
    image: "texture/class/berserk.png",
    stats: {
      maxhp: 40,
      hp: 40,
      maxmp: 10,
      mp: 10,
    },
    inventory: [
      { id: "axe", quantity: 1, },
    ]
  },
  {
    name: "Целитель",
    image: "texture/class/chelitel.png",
    stats: {
      maxhp: 20,
      hp: 20,
      maxmp: 10,
      mp: 10,
    },
    inventory: [
      { id: "potion-of-health", quantity: 3, },
    ]
  },
  {
    name: "Маг",
    image: "texture/class/mag.png",
    stats: {
      maxhp: 20,
      hp: 20,
      maxmp: 50,
      mp: 50,
    },
    inventory: [
      { id: "stick", quantity: 1, },
    ]
  },
  {
    name: "Мечник",
    image: "texture/class/mechnik.png",
    stats: {
      maxhp: 40,
      hp: 40,
      maxmp: 10,
      mp: 10,
    },
    inventory: [
      { id: "short-sword", quantity: 1, },
    ]
  },
]