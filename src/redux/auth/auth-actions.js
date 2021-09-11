import { createAction } from '@reduxjs/toolkit';

export const registration = createAction('auth/signup');
export const login = createAction('auth/login');
export const getUserInfo = createAction('auth/getInfo');
export const logout = createAction('auth/logout');
