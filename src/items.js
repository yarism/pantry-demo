export const items = [];

export function addItem(name, amount) {
  items.push({ name, amount });
}

export function removeItem(name) {
  const i = items.findIndex((item) => item.name === name);
  if (i >= 0) items.splice(i, 1);
}
