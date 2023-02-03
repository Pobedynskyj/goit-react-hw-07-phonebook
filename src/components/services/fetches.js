import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://63dd0529df83d549ce98cc58.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contats/fetch', async () => {
  const { data } = await axios.get(url);
  return data;
});

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const { data } = await axios.post(url, contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
});
