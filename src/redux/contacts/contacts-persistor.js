import { persistReducer } from 'redux-persist';
import { contactsReducer } from './contactsReducer';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'List',
  storage,
  blacklist: ['filter'],
};

export const contactsPersistor = persistReducer(
  contactsPersistConfig,
  contactsReducer,
);
