import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";


const tempData = [
  {
    id: 1,
    name: "Paul",
    terminDate: DateTime.now().toISO(),
    terminTime: DateTime.now().toISO(),
    birthdayDate: DateTime.now().toISO(),
    behandlung: "Ambulant",
  },
  // other initial items
];


const initialState = {
  items: tempData,
  selectedItem: null,
  isEditing: false,
  sucheValue: "",
};

export const terminSlice = createSlice({
  name: 'termins',
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.selectedItem = action.payload || null;
    },
    addItem: (state, action) => {
      state.items.push({
        ...action.payload,
        terminDate: action.payload.terminDate,
        terminTime: action.payload.terminTime,
        birthdayDate: action.payload.birthdayDate,
      });
    },
    
    deleteItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    editItem: (state, action) => {
      state.isEditing = action.payload;
    },
    updateItem: (state, action) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    setSearchValue: (state, action) => {
      state.sucheValue = action.payload;
    },
  },
});


export const { setItem, addItem, deleteItem, editItem, updateItem, setSearchValue } = terminSlice.actions;

export default terminSlice.reducer;

