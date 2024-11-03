import { createSelector } from 'reselect';

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoading = (state) => state.contacts.contacts.loading;

export const selectFilteredContacts = createSelector(
    [selectContacts, (state) => state.filters.name],
    (contacts, filter) => {
        if (!filter) return contacts;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    }
);
