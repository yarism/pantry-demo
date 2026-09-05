import { test } from 'node:test';
import assert from 'node:assert';
import { items, addItem, removeItem } from '../src/items.js';

test('adding and removing an item', () => {
  addItem('milk', 1);
  assert.strictEqual(items.length, 1);
  removeItem('milk');
  assert.strictEqual(items.length, 0);
});
