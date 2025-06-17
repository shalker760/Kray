export interface Character {
  name: string
  image: string
  stats: {
    maxhp: number
    hp: number
    maxmp: number
    mp: number
  }
  inventory?: {
    id: string
    quantity: number
  }[]
}