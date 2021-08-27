import { combineReducers } from 'redux';
import { initialState } from '../initialState';
// import actionTypes from './contactsActoinsTypes';
// import { addLocalStorage } from '../../service/helpers/localeStorage';
import { createReducer } from '@reduxjs/toolkit';
import {
  contactsAction,
  deleteActions,
  filterAction,
} from './contacts-actions';

// const contactsItemsReducer = (state = initialState.contacts.items, action) => {
//   switch (action.type) {
//     case actionTypes.ADD_ITEMS:
//       const addNewState = [...state, action.payload];

//       addLocalStorage(addNewState);
//       return addNewState;
//     case actionTypes.DELETE_ITEMS:
//       const newState = state.filter(contact => contact.id !== action.payload);
//       addLocalStorage(newState);
//       return newState;
//     default:
//       return state;
//   }
// };

const items = createReducer(initialState.contacts.items, {
  [contactsAction]: (state, { payload }) => {
    const newState = [...state, payload];
    // addLocalStorage(newState);
    return newState;
  },
  [deleteActions]: (state, { payload }) => {
    const newState = state.filter(contact => contact.id !== payload);
    // addLocalStorage(newState);
    return newState;
  },
});

// const filterReducer = (state = initialState.contacts.filter, action) => {
//   switch (action.type) {
//     case actionTypes.FILTER_ITEMS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const filter = createReducer(initialState.contacts.filter, {
  [filterAction]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
