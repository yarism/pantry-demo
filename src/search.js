import { items } from './items.js';

export function search(text) {
  const q = text.toLowerCase();
  return items.filter((item) => item.name.toLowerCase().includes(q));
}
