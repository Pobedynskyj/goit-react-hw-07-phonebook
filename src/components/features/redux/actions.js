import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  removeContact,
} from 'components/service/api';

export const getAllContacts = createAsyncThunk('getContacts', async () => {
  try {
    const res = await fetchContacts();
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const addNewContact = createAsyncThunk('addContact', async contact => {
  try {
    const res = await addContact(contact);
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const deleteContact = createAsyncThunk('deleteContact', async id => {
  try {
    const res = await removeContact(id);
    return res;
  } catch (error) {
    console.log(error.message);
  }
});

export const filterContact = createAction('filter');
// dispatch = (const action = {type: 'contacts/getContact', payload: res})
