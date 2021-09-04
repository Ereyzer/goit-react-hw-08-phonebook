import { testFunc } from './filterTest';

export function filterItems(items, filter) {
  if (filter === '') return items;
  return items.filter(({ data: { name } }) => testFunc(filter, name));
}
