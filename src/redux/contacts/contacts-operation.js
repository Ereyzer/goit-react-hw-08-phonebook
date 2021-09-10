import * as actions from './contacts-actions';
import apiServices from '../../service/apiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
