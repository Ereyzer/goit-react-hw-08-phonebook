import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children, redirectTo, restricted, ...props }) => {
  const isUserIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isUserIn && restricted;
  return (
    <Route {...props}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

PublicRoute.defaultProps = {
  redirectTo: '/',
  restricted: false,
};

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
