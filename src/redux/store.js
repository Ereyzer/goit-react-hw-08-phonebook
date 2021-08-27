// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { contactsReducer } from './contacts/contactsReducer';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const contactsPersistConfig = {
  key: 'List',
  storage,
  blackList: ['filter'],
};

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

const middleware = getDefaultMiddleware => {
  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      logger,
    ];
  } else {
    return [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    ];
  }
};
// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
