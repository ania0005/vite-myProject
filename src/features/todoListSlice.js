import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const todolistSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    saveItem: (state, action) => {
      if (action.payload.trim()) {
        state.items.push({
          id: Math.random(), // Генерация уникального ID
          text: action.payload, // Хранение текста задачи
        });
      }
    },
    dellItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { saveItem, dellItem } = todolistSlice.actions;
export default todolistSlice.reducer;

