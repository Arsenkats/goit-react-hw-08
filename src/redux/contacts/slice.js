import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from './operations';
import { toast } from 'react-toastify';
import { logout} from "../auth/operations";

const initialState = {
    contacts: {
        items: [],
        loading: false,
        error: null
    }
};

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state) => {
              state.contacts.loading = true;
              state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
              state.contacts.items = action.payload;
              state.contacts.loading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
              state.contacts.loading = false;
              state.contacts.error = action.error.message;
            })
            .addCase(deleteContact.pending, (state) => {
                state.contacts.loading = true;
                state.contacts.error = null;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
                state.contacts.loading = false;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.error.message;
                toast.error(`Failed to delete contact: ${action.error.message}`);
            })
            .addCase(addContact.pending, (state) => {
                state.contacts.loading = true;
                state.contacts.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.items.push(action.payload);
                state.contacts.loading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.contacts.loading = false;
                state.contacts.error = action.error.message;
                toast.error(`Failed to add contact: ${action.error.message}`);
            })
            .addCase(logout.fulfilled, () => initialState);
    }
});

export const contactsReducer = slice.reducer;
