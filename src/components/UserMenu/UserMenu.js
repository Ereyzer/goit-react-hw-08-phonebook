import React from 'react';
import { Button } from 'react-bootstrap';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserMenu.module.css';
import userImage from '../../icons/programmer.svg';

export function UserMenu() {
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();
  function logoutBtn(e) {
    dispatch(authOperations.logoutUser());
  }
  return (
    <div className={styles.UserMenuBlock}>
      <div className={styles.UserName}>
        <img src={userImage} alt="userImage"></img>
        <span>{user.name}</span>
      </div>
      <div>
        <Button onClick={logoutBtn}>Logout</Button>
      </div>
    </div>
  );
}
