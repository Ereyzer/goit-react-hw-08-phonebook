import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../service/apiService';
import { registration, login, getUserInfo, logout } from './auth-actions';

export const signupUser = createAsyncThunk(
  [registration],
  async (user, { rejectWithValue }) => {
    try {
      const response = await apiService.signup(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  [login],

  async (user, { rejectWithValue }) => {
    try {
      const response = await apiService.login(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getInfoUser = createAsyncThunk(
  [getUserInfo],

  async (tokenUser, { rejectWithValue }) => {
    try {
      const response = await apiService.getUserInfo(tokenUser);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logoutUser = createAsyncThunk(
  [logout],

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await apiService.logout();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
