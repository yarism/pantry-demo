import { items } from './items.js';

export function render() {
  return items.map((i) => `${i.name}: ${i.amount}`).join('\n');
}
