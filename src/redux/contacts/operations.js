
import { createAsyncThunk } from '@reduxjs/toolkit';
import { goitApi } from '../auth/operations';



export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkApi) => {
  try {
    const { data } = await goitApi.get('/contacts');
    return data;
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    return thunkApi.rejectWithValue(error.message);
  }
});


export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkApi) => {
    try {
        const { data } = await goitApi.delete(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkApi) => {
    try {
        const { data } = await goitApi.post(`/contacts`, body);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});
