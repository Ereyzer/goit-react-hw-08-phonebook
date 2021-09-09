import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({ children, ...props }) => {
  return <Route {...props}>{children}</Route>;
};
