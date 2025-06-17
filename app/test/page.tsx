"use client"
import { useEffect, useState } from 'react'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { handleAddItem, handleChangeHP } from '@/hooks/useCharacter'
import { TypingText, Color, Shake, Blink, Bold } from '@/components/text'

export default function Test() {
  const [character, setCharacter] = useLocalStorage('character', null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="bg-foreground/10 p-4 m-4 rounded overflow-auto">...</div>
  }

  if (character) {
    return (
      <div className="p-4 space-y-2">
        <pre className='bg-foreground/10 py-2 px-4 rounded overflow-auto'>
          {JSON.stringify(character, null, 2)}
        </pre>

        <div className='bg-foreground/15 py-2 px-4'>
          <div className="flex space-x-8">
            <label className='flex gap-2 items-center'>
              HP:
              <input
                type="number"
                value={character.stats.hp}
                onChange={e => {
                  const value = +e.target.value
                  setCharacter({
                    ...character,
                    stats: {
                      ...character.stats,
                      hp: Math.min(Math.max(value, 0), character.stats.maxhp),
                    },
                  })
                }}
                className="px-2 py-1 rounded"
              />
            </label>
            <label className='flex gap-2 items-center'>
              MP:
              <input
                type="number"
                value={character.stats.mp}
                onChange={e => {
                  const value = +e.target.value
                  setCharacter({
                    ...character,
                    stats: {
                      ...character.stats,
                      mp: Math.min(Math.max(value, 0), character.stats.maxmp),
                    },
                  })
                }}
                className="px-2 py-1 rounded"
              />
            </label>
          </div>

          <div className='w-full space-y-2 py-4'>
            <div className="relative w-full bg-gray-900 rounded h-6 overflow-hidden">
              <div
                className={`absolute left-0 top-0 h-full rounded duration-300 ${character.stats.hp / character.stats.maxhp < 0.3 ? 'bg-red-600' : 'bg-green-600'}`}
                style={{ width: `${(character.stats.hp / character.stats.maxhp) * 100}%` }}
              />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                HP {character.stats.hp} / {character.stats.maxhp}
              </div>
            </div>

            <div className="relative w-full bg-gray-900 rounded h-6 overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-600 rounded duration-300"
                style={{ width: `${(character.stats.mp / character.stats.maxmp) * 100}%` }}
              />
              <div className="absolute inset-0 flex justify-center items-center text-white">
                MP {character.stats.mp} / {character.stats.maxmp}
              </div>
            </div>
          </div>

        </div>

        <div className='bg-foreground/10 py-2 px-4'>
          <TypingText duration={500}>
            Без нечего
            <br />
            <Shake>Дрожание</Shake>
            <br />
            <Color color="#f0f">Цвееетноооой</Color>
            <br />
            <Blink>Мерцание, хз зачем.</Blink>
            <br />
            <Bold>Самое тупое наверное</Bold>
          </TypingText>
        </div>
      </div>
    )
  } else {
    return <div className="bg-foreground/10 p-4 m-4 rounded overflow-auto">Нечего не выбрано</div>
  }
}
