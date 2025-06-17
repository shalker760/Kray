//hooks/useInventory.ts
import { useState, useEffect } from 'react';
import { inventoryCategories } from '../data/items';

export const useInventory = () => {
  const [items, setItems] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const itemMap: { [key: string]: any } = {};
    inventoryCategories.forEach(category => {
      category.items.forEach(item => {
        itemMap[item.id] = item;
      });
    });
    setItems(itemMap);
  }, []);

  return items;
};