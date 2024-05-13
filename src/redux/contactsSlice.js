import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import getFormatNumber from "../helpers/functions";
const items = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: items,
  reducers: {
    addContact: {
      reducer(state, action) {
        console.log(action);
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            name: values.name,
            number: getFormatNumber(values.number),
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.find((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
