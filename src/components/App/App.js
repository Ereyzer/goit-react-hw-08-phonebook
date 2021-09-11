import './App.css';
import React, { useEffect, useRef, Suspense } from 'react';

import { Container } from '../Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations, authSelectors } from '../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { PublicRoute } from '../PublicRoute/PublicRoute';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import Loading from '../Loader/Loader';
const PrivacyPolicyView = React.lazy(() =>
  import('../../views/PrivacyPolicyView/PrivacyPolicyView'),
);
const ContactsView = React.lazy(() =>
  import('../../views/ContactsView/ContactView.js'),
);
const RegisterView = React.lazy(() =>
  import('../../views/RegisterView/RegisterView.js'),
);
const LoginView = React.lazy(() =>
  import('../../views/LoginViews/LoginViews.js'),
);

const HomeView = React.lazy(() => import('../../views/HomeView/HomeView.js'));
export default function App() {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useRef(useSelector(authSelectors.getToken));
  const authError = useSelector(authSelectors.getAuthError);
  useEffect(() => {
    if (token) {
      (async () => {
        try {
          const result = await dispatch(
            authOperations.getInfoUser(token.current),
          );
          if (result.type === 'auth/getInfo/rejected')
            throw new Error('my error');
          return result;
        } catch (error) {
          return toast.error(authError);
        }
      })();
    }
  }, [dispatch, token]);
  const background = location.state && location.state.background;
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Container>
          <h1 id="title">Phonebook</h1>
        </Container>
        <Switch location={background || location}>
          <PublicRoute path="/" exact>
            <HomeView />
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
          <Redirect strict from="/:safds" to="/" />
        </Switch>
        <PublicRoute path="/privacy_policy">
          <PrivacyPolicyView show={true} onHide={() => history.goBack()} />
        </PublicRoute>
      </Suspense>
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
