import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../initialState';

import { combineReducers } from 'redux';
import {
  signupUser,
  loginUser,
  getInfoUser,
  logoutUser,
} from './auth-operation';

const token = createReducer(initialState.auth.token, {
  [signupUser.fulfilled]: (_, { payload }) => payload.token,
  [loginUser.fulfilled]: (_, { payload }) => payload.token,
  [logoutUser.fulfilled]: () => initialState.auth.token,
});

const user = createReducer(initialState.auth.user, {
  [signupUser.fulfilled]: (_, { payload }) => payload.user,
  [loginUser.fulfilled]: (_, { payload }) => payload.user,
  [getInfoUser.fulfilled]: (_, { payload }) => payload,
  [logoutUser.fulfilled]: () => initialState.auth.user,
});

const isLoggedIn = createReducer(initialState.auth.isLoggedIn, {
  [signupUser.pending]: () => initialState.auth.isLoggedIn,
  [loginUser.pending]: () => initialState.auth.isLoggedIn,
  [logoutUser.pending]: () => initialState.auth.isLoggedIn,
  [signupUser.fulfilled]: () => true,
  [loginUser.fulfilled]: () => true,
  [getInfoUser.fulfilled]: () => true,
  [logoutUser.fulfilled]: () => initialState.auth.isLoggedIn,
});

const error = createReducer(initialState.auth.error, {
  [signupUser.pending]: () => initialState.auth.error,
  [loginUser.pending]: () => initialState.auth.error,
  [logoutUser.pending]: () => initialState.auth.error,
  [getInfoUser.pending]: () => initialState.auth.error,
  [signupUser.rejected]: (_, { payload }) => payload,
  [loginUser.rejected]: (_, { payload }) => payload,
  [logoutUser.rejected]: (_, { payload }) => payload,
  [getInfoUser.rejected]: (_, { payload }) => {
    if (payload.response.status === 401) {
      return 'Please login or register';
    }
    return payload.message;
  },
});
//! іване коли залишеться час придусмай щось
const loading = createReducer(initialState.auth.loading, {
  [getInfoUser.pending]: () => true,
  [getInfoUser.fulfilled]: () => false,
  [getInfoUser.rejected]: () => false,
});
const authReducer = combineReducers({
  token,
  user,
  isLoggedIn,
  error,
  loading,
});
export default authReducer;
