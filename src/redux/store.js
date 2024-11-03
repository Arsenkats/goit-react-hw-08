import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    filters: filterReducer
  }),
});

