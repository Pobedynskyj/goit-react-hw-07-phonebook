import { combineReducers, createSlice } from '@reduxjs/toolkit';
import {
  addNewContact,
  deleteContact,
  filterContact,
  getAllContacts,
} from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllContacts.fulfilled]: (state, action) => action.payload,
    [addNewContact.fulfilled]: (state, action) => action.payload,
    [deleteContact.fulfilled]: (state, action) => action.payload,
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    [filterContact]: (state, action) => action.payload,
  },
});

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
});
