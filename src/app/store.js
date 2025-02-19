import { configureStore } from '@reduxjs/toolkit';
import { gameSlice } from '../features/gameSlice';
import { terminSlice } from '../features/terminSlice';
import { weatherSlice } from '../features/weatherSlice';
import { todolistSlice } from '../features/todoListSlice';
import gameSnakeReducer from '../features/gameSnakeSlice'; 
import { verbTrainerSlice } from '../features/verbTrainerSlice';

const store = configureStore({
  reducer: {
    game: gameSlice.reducer,  
    citiesWeather: weatherSlice.reducer,
    termins: terminSlice.reducer,
    todolist: todolistSlice.reducer,
    gameSnake: gameSnakeReducer, 
    verbTrainer: verbTrainerSlice.reducer,  
  },
});

export default store;

