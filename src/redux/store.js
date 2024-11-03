import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import { contactsReducer } from "./contacts/slice";
import { authSlice } from "./auth/slice";

export const store = configureStore({
  reducer: combineReducers({
    contacts: contactsReducer,
    filters: filterReducer,
    auth: authSlice
  }),
});

