import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL, USERS_LIMIT } from 'constants';

axios.defaults.baseURL = API_URL;

export const fetchFirstVisibleContacts = createAsyncThunk(
  'contacts/',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`abzagency?page=1&limit=${USERS_LIMIT}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/abzagency?page=${page}&limit=${USERS_LIMIT}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async function (
    { name, avatar, email, phone, position },
    { rejectWithValue }
  ) {
    try {
      const contact = {
        name,
        avatar,
        email,
        phone,
        position,
      };

      const response = await fetch(
        'https://63c83c875c0760f69ac83edb.mockapi.io/contacts/abzagency',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
