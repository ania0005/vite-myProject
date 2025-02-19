import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: Array(9).fill(null),
  currentPlayer: "X",
  selectedFirstPlayer: "X",
  winner: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    resetGame: (state) => {
      state.items = Array(9).fill(null);
      state.currentPlayer = state.selectedFirstPlayer === "X" ? "X" : "O";
      state.winner = null;
    },
    setPlayer: (state, action) => {
      state.currentPlayer = action.payload;
    },
    setSelectedFirstPlayer: (state, action) => {
      state.selectedFirstPlayer = action.payload;
      state.currentPlayer = action.payload;
    },
    makeMove: (state, action) => {
      const index = action.payload.index;
      if (state.items[index] || state.winner) return;

      state.items[index] = state.currentPlayer;
      state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
      state.winner = checkWinner(state.items);
    },
  },
});

const checkWinner = (cells) => {
  const winnerCombIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const arrIndexX = cells
    .map((element, index) => (element === "X" ? index : -1))
    .filter((index) => index !== -1);

  const arrIndexO = cells
    .map((element, index) => (element === "O" ? index : -1))
    .filter((index) => index !== -1);

  if (
    winnerCombIndex.some((comb) => comb.every((num) => arrIndexX.includes(num)))
  ) {
    return "Winner-X";
  }
  if (
    winnerCombIndex.some((comb) => comb.every((num) => arrIndexO.includes(num)))
  ) {
    return "Winner-O";
  }

  return cells.includes(null) ? null : "Draw";
};

export const { resetGame, setPlayer, makeMove, setSelectedFirstPlayer } =
  gameSlice.actions;
export default gameSlice.reducer;
