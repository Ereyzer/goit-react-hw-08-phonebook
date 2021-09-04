import { filterItems } from '../../helpers/filterItems';
export const getContacts = ({ contacts }) => contacts.items;
export const getFilter = ({ contacts }) => contacts.filter;
export const getContactsWithFilter = data =>
  filterItems(getContacts(data), getFilter(data));
export const isLoading = ({ contacts }) => contacts.loading;
export const error = ({ contacts }) => contacts.error;
