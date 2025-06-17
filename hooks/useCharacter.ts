import { useLocalStorage } from '@/hooks/useLocalStorage'

const [character, setCharacter] = useLocalStorage('selectedCharacter', null)

export const handleChangeHP = (amount: number) => {
  setCharacter({
    ...character,
    stats: {
      ...character.stats,
      health: character.stats.hp + amount,
    },
  })
}

export const handleAddItem = (itemName: string) => {
  const updatedInventory = [...character.inventory]
  const item = updatedInventory.find(item => item.name === itemName)

  if (item) {
    item.quantity += 1
  } else {
    updatedInventory.push({ name: itemName, quantity: 1 })
  }

  setCharacter({ ...character, inventory: updatedInventory })
}