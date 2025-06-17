import { useState } from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        console.error('Ошибка при работе с localStorage', error)
        return initialValue
      }
    }
    return initialValue
  })

  const setValue = (value: any) => {
    if (typeof window !== 'undefined') {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.error('Ошибка при сохранении в localStorage', error)
      }
    }
  }

  return [storedValue, setValue]
}
