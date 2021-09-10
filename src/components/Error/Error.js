import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { authSelectors } from '../../redux/auth';
import { contactsSelectors } from '../../redux/contacts';

function Error() {
  const auth = useSelector(authSelectors.getAuthError);
  const contacts = useSelector(contactsSelectors.error);

  useEffect(() => {
    if (auth) {
      console.log('auth error my log', auth);
      toast.error(auth);
    }
    if (contacts) {
      console.log('contacts error my log', contacts);
      toast.error(contacts);
    }
  });
  return <></>;
}

export default Error;
