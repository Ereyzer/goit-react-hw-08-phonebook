import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ children, redirectTo, ...props }) => {
  const isUserIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...props}>
      {isUserIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

PrivateRoute.defaultProps = {
  redirectTo: '/',
};

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.element.isRequired,
};
