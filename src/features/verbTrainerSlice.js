import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verbs: [],
  currentVerb: null,
};

export const verbTrainerSlice = createSlice({
  name: "verbTrainer",
  initialState,
  reducers: {
    setVerbs: (state, action) => {
      state.verbs = action.payload;
    },
    setCurrentVerb: (state) => {
      if (state.verbs.length > 0) {
        state.currentVerb = state.verbs[Math.floor(Math.random() * state.verbs.length)];
      }
    },
  },
});

export const { setVerbs, setCurrentVerb } = verbTrainerSlice.actions;
export default verbTrainerSlice.reducer;
