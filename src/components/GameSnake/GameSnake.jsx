import { useDispatch } from "react-redux";
import { saveKey } from "../../features/gameSnakeSlice";
import Board from "./components/Board";
import Status from "./components/Status";
import styles from "./GameSnake.module.css";


function GameSnake() {
  const dispatch = useDispatch();

  const keyDownHandler = (event) => {
    dispatch(saveKey(event.key));
  };
  return (
    <div className={styles.gameSnake} onKeyDownCapture={keyDownHandler}>
      <Board />
      <Status />
    </div>
  );
}

export default GameSnake;
