"use client"

import { useState, useEffect } from "react"
import Tooltip from "@/components/Tooltip"
import Inventory from '@/components/character/inventory'
import { useRouter } from "next/navigation"
import { Background } from "@/components/background"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export default function Start() {
  const [inventory, setOpenInventory] = useState<boolean>(false)
  const router = useRouter()
  const [character, setCharacter] = useLocalStorage('character', null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return null
  
  if (!character) {
    router.push('/')
    return null
  }

  return (
    <>
      <Background />
      <div className="p-4 h-[100dvh]">

      <div>
    
      why?
      </div>

        <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%]">
          <div className="spcae-y-4">
            <button onClick={() => router.push("/events/nachalo/1")}>встать</button>
          </div>
        </div>

        {/* ИНВЕНТАРЬ ФЫЫУФЫУФЫУФЫУФЫУФЫ */}
        <div className="absolute bottom-0 left-0">
          <Tooltip content="Инвентарь">
            <div className="bottom-0" data-tooltip-id="inventory" onClick={() => setOpenInventory(!inventory)}>
              <img src="texture/inventory.png" alt="inventory" />
            </div>
          </Tooltip>
        </div>
        {inventory && (
          <Inventory />
        )}
        {/*  */}
      </div>
    </>
  )
}
