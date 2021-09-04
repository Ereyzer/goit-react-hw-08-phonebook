import * as actions from './contacts-actions';
import apiServices from '../../service/apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';
// export const fetchContacts = () => async dispatch => {
//   const result = await apiServices.getContacts();
//   if (result.status === 200)
//     return dispatch(actions.existContactsAction(result.data));
// };

export const fetchContacts = createAsyncThunk(
  [actions.existContactsAction],
  async (_, { rejectWithValue }) => {
    try {
      const result = await apiServices.getContacts();
      return result.data;
    } catch (error) {
      return rejectWithValue(`${error.message}`);
    }
  },
);

// export const addNewContact = data => async dispatch => {
//   try {
//     const result = await apiServices.setContacts(data);
//     console.log('result', 111, result);
//     if (result.status === 201)
//       return dispatch(actions.addContactAction(result.data));
//   } catch (error) {
//     return error.message;
//   }
// };

export const addNewContact = createAsyncThunk(
  [actions.addContactAction],
  async (data, { rejectWithValue }) => {
    try {
      const result = await apiServices.setContacts(data);
      return result.data;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not add this contact please reload this page and try again`,
      );
    }
  },
);

// export const deleteContact = id => async dispatch => {
//   const result = await apiServices.deleteContact(id);
//   if (result.status === 200) return dispatch(actions.deleteActions(id));
// };

export const deleteContact = createAsyncThunk(
  [actions.deleteActions],
  async (id, { rejectWithValue }) => {
    try {
      const result = await apiServices.deleteContact(id);
      if (result.status === 200) return id;
    } catch (error) {
      return rejectWithValue(
        `${error.message}-- we can not delete this contact please reload this page and try again`,
      );
    }
  },
);
