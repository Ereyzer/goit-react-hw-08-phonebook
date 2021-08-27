import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const contactsAction = createAction(
  'contacts/addContact',
  ({ name, number }) => ({
    payload: { id: uuidv4(), name, number },
  }),
);

export const filterAction = createAction('contacts/filter');
export const deleteActions = createAction('contacts/deleteContact');
