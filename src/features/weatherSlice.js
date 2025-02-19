
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], 
};

export const weatherSlice = createSlice({
  name: "citiesWeather",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      // Проверка на уникальность перед добавлением
      if (!state.items.some((item) => item.title === action.payload.title)) {
        state.items.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { setItem, addItem, deleteItem, editItem } = weatherSlice.actions;

export default weatherSlice.reducer;


  