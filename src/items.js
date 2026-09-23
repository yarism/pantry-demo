export const items = [];

// Adding an item that already exists tops up its amount instead.
export function addItem(name, amount) {
  const existing = items.find((item) => item.name === name);
  if (existing) existing.amount += amount;
  else items.push({ name, amount });
}

export function removeItem(name) {
  const i = items.findIndex((item) => item.name === name);
  if (i >= 0) items.splice(i, 1);
}

export function expiringSoon(days = 3) {
  const soon = Date.now() + days * 86400000;
  return items.filter((item) => item.expires && item.expires < soon);
}
