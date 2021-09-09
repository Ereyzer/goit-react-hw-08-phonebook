import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';
import { contactsReducer } from './contacts';
import { authPersistor } from './auth';

const store = configureStore({
  reducer: {
    auth: authPersistor,
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
