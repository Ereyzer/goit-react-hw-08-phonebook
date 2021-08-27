import { combineReducers } from 'redux';
import { initialState } from '../initialState';
import { createReducer } from '@reduxjs/toolkit';
import {
  contactsAction,
  deleteActions,
  filterAction,
} from './contacts-actions';

const items = createReducer(initialState.contacts.items, {
  [contactsAction]: (state, { payload }) => {
    const newState = [...state, payload];

    return newState;
  },
  [deleteActions]: (state, { payload }) => {
    const newState = state.filter(contact => contact.id !== payload);

    return newState;
  },
});

const filter = createReducer(initialState.contacts.filter, {
  [filterAction]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
