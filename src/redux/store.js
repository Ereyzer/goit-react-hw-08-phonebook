import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { contactsPersistor } from './contacts/contacts-persistor';
import { middleware } from './middleware';

const store = configureStore({
  reducer: {
    contacts: contactsPersistor,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
