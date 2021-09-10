import React from 'react';
import { Button } from 'react-bootstrap';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

export function UserMenu() {
  const dispatch = useDispatch();
  function logoutBtn(e) {
    dispatch(authOperations.logoutUser());
  }
  return (
    <div>
      <div>User</div>
      <Button onClick={logoutBtn}>Logout</Button>
    </div>
  );
}
