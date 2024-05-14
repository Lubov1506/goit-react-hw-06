import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import getFormatNumber from "../helpers/functions";
const initialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  selectors: { selectContacts: (state) => state.contacts },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(payload) {
        return {
          payload: {
            name: payload.name,
            number: getFormatNumber(payload.number),
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const { selectContacts } = contactsSlice.selectors;
