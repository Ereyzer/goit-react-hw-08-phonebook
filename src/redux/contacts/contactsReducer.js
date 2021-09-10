import { combineReducers } from 'redux';
import { initialState } from '../initialState';
import { createReducer } from '@reduxjs/toolkit';
import { filterAction } from './contacts-actions';
import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from './contacts-operation';
import { logoutUser } from '../auth/auth-operation';

const items = createReducer(initialState.contacts.items, {
  [fetchContacts.fulfilled]: (_, { payload }) => [...payload],
  [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [logoutUser.fulfilled]: () => initialState.contacts.items,
});
const loading = createReducer(initialState.contacts.loading, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});
const error = createReducer(initialState.contacts.error, {
  [fetchContacts.pending]: () => null,
  [addNewContact.pending]: () => null,
  [deleteContact.pending]: () => null,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [addNewContact.rejected]: (_, { payload }) => payload,
});

const filter = createReducer(initialState.contacts.filter, {
  [filterAction]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
  error,
  loading,
});

export default contactsReducer;
