import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './Contacts.slice';
import { filterReducer } from './Filter.slice';

export const store = configureStore({
  reducers: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
