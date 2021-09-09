import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../initialState';
import { registration, login, getUserInfo, logout } from './auth-actions';
import { combineReducers } from 'redux';

const token = createReducer(initialState.auth.token, {
  [registration.fulfilled]: (_, { payload }) => payload,
  [login.fulfilled]: (_, { payload }) => payload,
  [logout.fulfilled]: () => null,
});

const user = createReducer(initialState.auth.user, {
  [getUserInfo.fulfilled]: (_, { payload }) => payload,
});

const isLoggedIn = createReducer(initialState.auth.isLoggedIn, {
  [registration.fulfilled]: (_, { payload }) => true,
  [login.fulfilled]: (_, { payload }) => true,
  [logout.fulfilled]: () => false,
});
const authReducer = combineReducers({ token, user, isLoggedIn });
export default authReducer;
