
export interface InventoryCategory {
  id: string;
  items: Array<Item>;
}

export interface Item {
  id: string;
  name: string;
  src: string;
  description?: string;
  damage?: number;
  defense?: number;
}

// Списи предметов по категориям
export const inventoryCategories: InventoryCategory[] = [
  {
    id: 'weapons',
    items: [
      { id: 'axe', name: 'Топор', src: 'texture/weapons/axe.png', },
      { id: 'sword', name: 'Меч', src: 'texture/weapons/sword.png', },
      { id: 'short-sword', name: 'Короткий меч', src: 'texture/weapons/short-sword.png', },
      { id: 'stick', name: 'Посох', src: 'texture/weapons/posox.png', },
    ],
  },
  {
    id: 'consumables',
    items: [
      { id: 'potion-of-health', name: 'Зелье лечения', src: 'texture/weapons/axe.png', },
    ],
  },
  {
    id: 'armor',
    items: [
      { id: 'helmet', name: 'Шлем', src: 'texture/armor/helmet.png', },
      { id: 'breastbone', name: 'Нагрудник', src: 'texture/armor/bib.png', },
      { id: 'trousers', name: 'Штаны', src: 'texture/armor/trousers.png', },
      { id: 'boots', name: 'ботинки', src: 'texture/armor/boots.png', },
    ],
  },
];
