export const addLocalStorage = newContacts =>
  localStorage.setItem('list', JSON.stringify(newContacts));
