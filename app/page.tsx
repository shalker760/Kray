"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Tooltip from "@/components/Tooltip"
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { characters } from '@/data/characters'
import { useInventory } from '@/hooks/useInventory'

export default function Home() {
  const router = useRouter()
  const items = useInventory()

  const [selectedCharacter, setSelectedCharacter] = useLocalStorage('character', null)

 // if (selectedCharacter) {/
  //  router.push(`/start`)
 // }

  const handleCharacterSelection = (characterId: any) => {
    setSelectedCharacter(characterId)
    router.push(`/start`)
  }

  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      {characters.map((characters) => (
        <div key={characters.name} className="flex flex-col space-y-4 cursor-pointer hover:bg-card duration-200" data-tooltip-id={characters.name} onClick={() => handleCharacterSelection(characters)}>
          <Tooltip content={(<>
            <h1 className="text-center pb-2">{characters.name}</h1>

            <div className="space-y-2">
              <p className="bg-green-600 w-40 text-center rounded">HP: {characters.stats.hp}</p>
              <p className="bg-blue-600 w-40 text-center rounded">MP: {characters.stats.mp}</p>
            </div>
            <div className="py-2">
              Начальные предметы:
              <div className="flex flex-col">
                {characters.inventory?.map((item) => {
                  const itemDetails = items[item.id];
                  return (
                    <div key={item.id}>
                      {itemDetails?.name} {item.quantity > 1 && `(${item.quantity} шт.)`}
                    </div>
                  );
                })}
              </div>
            </div>
          </>)}>
            <img className="rounded-full w-full h-auto aspect-square" src={`/${characters.image}`} alt={characters.name} width={300} height={300} />
          </Tooltip>
        </div>
      ))}
    </div>
  )
}
