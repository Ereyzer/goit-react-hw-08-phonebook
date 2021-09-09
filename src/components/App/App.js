import './App.css';
import React, { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { Container } from '../Container';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { contactsSelectors } from '../../redux/contacts';
import { useSelector } from 'react-redux';
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
import { ContactsView, RegisterView, LoginViews } from '../../views';
import PrivacyPolicyView from '../../views/PrivacyPolicyView/PrivacyPolicyView';

export default function App() {
  const error = useSelector(contactsSelectors.error);
  const history = useHistory();
  const location = useLocation();
  const tooo = useSelector(state => state);
  console.log(tooo);

  useEffect(() => {
    if (error) {
      toast.error(error);
      return;
    }
  }, [error]);
  const background = location.state && location.state.background;
  return (
    <div>
      <Navigation />
      <Container>
        <h1 id="title">Phonebook</h1>
      </Container>
      <Switch location={background || location}>
        <PublicRoute path="/" exact>
          <ContactForm />
        </PublicRoute>
        <PublicRoute path="/registration">
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login">
          <LoginViews />
        </PublicRoute>

        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
      </Switch>
      <PublicRoute path="/privacy_policy">
        <PrivacyPolicyView show={true} onHide={() => history.goBack()} />
      </PublicRoute>

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
