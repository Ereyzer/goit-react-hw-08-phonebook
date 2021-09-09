import React, { useState } from 'react';
import { Button, Card, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
export function Navigation() {
  const [isUser, setIsUser] = useState(false);
  return (
    <Card.Header>
      <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
          <Nav.Link as="div" href="#first">
            <NavLink
              exact
              to="/"
              className={styles.Link}
              activeClassName={styles.CurrentLink}
            >
              Home
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        {isUser && (
          <Nav.Item>
            <Nav.Link as="div" href="#contacts">
              <NavLink
                to="/contacts"
                className={styles.Link}
                activeClassName={styles.CurrentLink}
              >
                Contacts
              </NavLink>
            </Nav.Link>
          </Nav.Item>
        )}
        <div className={styles.UserBlock}>
          {isUser ? (
            <>
              <div>User</div>
              <Button>Logout</Button>
            </>
          ) : (
            <>
              <Nav.Item>
                <Nav.Link as="div" href="#registration">
                  <NavLink
                    to="/registration"
                    className={styles.Link}
                    activeClassName={styles.CurrentLink}
                  >
                    Registration
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as="div" href="#login">
                  <NavLink
                    to="/login"
                    className={styles.Link}
                    activeClassName={styles.CurrentLink}
                  >
                    Login
                  </NavLink>
                </Nav.Link>
              </Nav.Item>
            </>
          )}
        </div>
      </Nav>
    </Card.Header>
  );
}
{
  /* <nav>
  <div>

  </div>
  <div>
    {isUser ? (
      <Button>Logout</Button>
    ) : (
      <>
      <Nav.Item>
          <Nav.Link href="#disabled" disabled>
          <NavLink
          to="/registration"
          className={styles.Link}
          activeClassName={styles.CurrentLink}
        >
          Registration
        </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#disabled" disabled>
          <NavLink
          to="/login"
          className={styles.Link}
          activeClassName={styles.CurrentLink}
        >
          Login
        </NavLink>
          </Nav.Link>
        </Nav.Item>


      </>
    )}
  </div>
</nav>; */
}
