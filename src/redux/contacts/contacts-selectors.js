import { createSelector } from 'reselect';
import { filterItems } from '../../helpers/filterItems';
export const getContacts = ({ contacts }) => contacts.items;
export const getFilter = ({ contacts }) => contacts.filter;
export const isLoading = ({ contacts }) => contacts.loading;
export const error = ({ contacts }) => contacts.error;
// export const getContactsWithFilter = data =>
//   filterItems(getContacts(data), getFilter(data));

export const getContactsWithFilter = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return filterItems(contacts, filter);
  },
);
