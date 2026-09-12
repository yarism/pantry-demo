import { items } from './items.js';

export function shoppingList(min = 1) {
  return items.filter((item) => item.amount < min).map((item) => item.name);
}
