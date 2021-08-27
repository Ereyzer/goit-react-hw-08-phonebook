import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './contactsActoinsTypes';

// export const contactsAction = ({ name, number }) => {
//   return {
//     type: actionTypes.ADD_ITEMS,
//     payload: { id: uuidv4(), name, number },
//   };
// };

export const contactsAction = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: { id: uuidv4(), name, number },
  }),
);

// export const filterAction = value => {
//   return { type: actionTypes.FILTER_ITEMS, payload: value };
// };
export const filterAction = createAction('contacts/filter');

// export const deleteActions = value => {
//   return { type: actionTypes.DELETE_ITEMS, payload: value };
// };

export const deleteActions = createAction('contacts/deleteContact');
