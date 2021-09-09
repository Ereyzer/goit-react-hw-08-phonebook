import { Route } from 'react-router-dom';
import React from 'react';

export const PrivateRoute = ({ children, ...props }) => {
  return <Route {...props}>{children}</Route>;
};
