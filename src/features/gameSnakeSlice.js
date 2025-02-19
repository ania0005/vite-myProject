import { createSlice } from "@reduxjs/toolkit";

const gameSnakeSlice = createSlice({
  name: "gameSnake",
  initialState: {
    status: "Start",
    statusValues: {
      Start: "Pause",
      Pause: "Resume",
      Resume: "Pause",
    },
    snake: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
    ],
    snakeHead: { x: 1, y: 0 },
    snakeSize: 2,
    apple: { x: 1, y: 1 },
    direction: "d",
    stopKeyCombinations: [
      ["w", "s"],
      ["s", "w"],
      ["a", "d"],
      ["d", "a"],
    ],
    savedKey: "d",
  },
  reducers: {
    changeStatus(state) {
      state.status = state.statusValues[state.status];
    },
    moveSnake(state) {
      if(state.status === 'Restart') return;
      let { x, y } = state.snakeHead;
      switch (state.direction) {
        case "d":
          x = x >= 9 ? 0 : x + 1;
          break;
        case "a":
          x = x <= 0 ? 9 : x - 1;
          break;
        case "w":
          y = y <= 0 ? 9 : y - 1;
          break;
        case "s":
          y = y >= 9 ? 0 : y + 1;
          break;
        default:
          break;
      }
      state.snakeHead = { x, y };
      state.snake.push({ x, y });
      state.snake = state.snake.slice(-state.snakeSize);
    },
    checkApple(state) {
      let { apple, snakeHead, snake } = state;
      if (apple.x === snakeHead.x && apple.y === snakeHead.y) {
        let isOnSnake = null;
        do {
          apple.x = Math.floor(Math.random() * 10);
          apple.y = Math.floor(Math.random() * 10);
          isOnSnake = snake.find(snakeElem => (snakeElem.x === apple.x && snakeElem.y === apple.y ));
          
        } while (isOnSnake);     
        state.apple = apple;
        state.snakeSize++;
      }
    },
    checkGameOver (state) {
      let {x, y} = state.snakeHead;
      let snakeHeadLess = state.snake.slice();
      snakeHeadLess.pop();
      let bitedPlace = null;
      bitedPlace = snakeHeadLess.find(s => s.x === x && s.y === y);
      if(bitedPlace) state.status = 'Restart';
    },
    saveKey(state, action) {
      for (let [a, b] of state.stopKeyCombinations) {
        if (a === state.direction && b === action.payload) return;
      }
      state.savedKey = action.payload;
    },
    setDirection(state) {
      state.direction = state.savedKey;
    },
  },
});

export const { changeStatus, moveSnake, saveKey, setDirection, checkApple, checkGameOver } =
  gameSnakeSlice.actions;

export default gameSnakeSlice.reducer;