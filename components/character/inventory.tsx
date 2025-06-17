"use client"
import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useInventory } from '@/hooks/useInventory'

export default function ZalupaInventory() {
    const [character, setCharacter] = useLocalStorage('character', null)
    const [itemsByCategory, setItemsByCategory] = useState<{ [key: string]: any[] }>({})
    const items = useInventory()

    return (
        <div className="absolute bottom-6 left-2 bg-gray-900 rounded p-4">
            <div className="flex gap-4">
                <div>
                    <div className="flex gap-2">
                        <div className="grid grid-rows-4 grid-cols-1 gap-2">
                            <span />
                            {character?.inventory?.map((item: any) => {
                                return (
                                    <div key={item.name}>
                                        <div className="grid grid-rows-4 grid-cols-1 gap-2">
                                            <span>{item.name}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="grid grid-rows-4 grid-cols-1 gap-2">

                        </div>

                        <div className="grid grid-rows-4 grid-cols-1 gap-2">

                        </div>
                    </div>
                </div>

                <div className="grid grid-rows-4 grid-cols-4 gap-2">

                </div>
            </div>
        </div>
    )
}
