import './App.css';
import React, { useEffect, useRef } from 'react';

import { Container } from '../Container';
import Error from '../Error/Error';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { PublicRoute } from '../PublicRoute/PublicRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import {
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
} from 'react-router-dom';
import { ContactsView, RegisterView, LoginView } from '../../views';
import PrivacyPolicyView from '../../views/PrivacyPolicyView/PrivacyPolicyView';
import { contactsSelectors } from '../../redux/contacts';

export default function App() {
  const history = useHistory();
  const location = useLocation();
  const UserLoading = useSelector(authSelectors.getAuthLoading);
  const contactLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();
  const token = useRef(useSelector(authSelectors.getToken));
  useEffect(() => {
    if (token) {
      dispatch(authOperations.getInfoUser(token.current));
    }
  }, [dispatch, token]);
  const background = location.state && location.state.background;
  return (
    <div>
      <Navigation />
      <Container>
        <h1 id="title">Phonebook</h1>
      </Container>
      <Switch location={background || location}>
        <PublicRoute path="/" exact>
          <h2>Home</h2>
        </PublicRoute>
        <PublicRoute path="/registration" redirectTo="/contacts" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
      <PublicRoute path="/privacy_policy">
        <PrivacyPolicyView show={true} onHide={() => history.goBack()} />
      </PublicRoute>
      {(UserLoading || contactLoading) && <Error />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}
