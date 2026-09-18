import { items } from './items.js';

export function render() {
  if (!items.length) return "The pantry is empty.";
  return items.map((i) => `${i.name}: ${i.amount}${i.expires ? " (expires)" : ""}`).join('\n');
}
