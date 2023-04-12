import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL, USERS_LIMIT } from 'constants';

axios.defaults.baseURL = API_URL;

export const fetchFirstVisibleContacts = createAsyncThunk(
  '/users/fetchFirstVisibleContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users?page=1&count=${USERS_LIMIT}`);
      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  '/users/fetchContacts',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/users?page=${page}&count=${USERS_LIMIT}`
      );

      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  '/users/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users', newContact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPositions = createAsyncThunk(
  '/positions/fetchPositions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/positions`);

      return data.positions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
