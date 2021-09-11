import { createAction } from '@reduxjs/toolkit';

export const addContactAction = createAction('contacts/addContact');

export const filterAction = createAction('contacts/filter');
export const deleteActions = createAction('contacts/deleteContact');

export const existContactsAction = createAction('contact/existContact');
