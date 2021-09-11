import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';
import { UserMenu } from '../UserMenu/UserMenu';

export function Navigation() {
  const location = useLocation();
  console.log(location.pathname);
  const [isUser, setIsUser] = useState(false);
  const isUserIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Card.Header>
      <Nav variant="tabs" activeKey={location.pathname}>
        <Nav.Item>
          <NavLink
            exact
            to="/"
            className={styles.Link}
            activeClassName={styles.CurrentLink}
          >
            <Nav.Link as="div" href="/">
              Home
            </Nav.Link>
          </NavLink>
        </Nav.Item>
        {isUserIn && (
          <Nav.Item>
            <NavLink
              to="/contacts"
              className={styles.Link}
              activeClassName={styles.CurrentLink}
            >
              <Nav.Link as="div" href="/contacts">
                Contacts
              </Nav.Link>
            </NavLink>
          </Nav.Item>
        )}
        <div className={styles.UserBlock}>
          {isUserIn ? (
            <UserMenu />
          ) : (
            <>
              <Nav.Item>
                <NavLink
                  to="/registration"
                  className={styles.Link}
                  activeClassName={styles.CurrentLink}
                >
                  <Nav.Link as="div" href="/registration">
                    Registration
                  </Nav.Link>
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  to="/login"
                  className={styles.Link}
                  activeClassName={styles.CurrentLink}
                >
                  <Nav.Link as="div" href="/login">
                    Login
                  </Nav.Link>
                </NavLink>
              </Nav.Item>
            </>
          )}
        </div>
      </Nav>
    </Card.Header>
  );
}
