import { useDispatch } from "react-redux";
import { saveKey} from "../../features/gameSnakeSlice";
import Board from "./components/Board";
import Status from "./components/Status";
import '../../App.css';




function GameSnake() {

  
  const dispatch = useDispatch();

  const keyDownHandler = (event) => {
   dispatch(saveKey(event.key));
  }
  return (
    <div className="gameSnake" onKeyDownCapture={keyDownHandler}>
      <Board />
      <Status />
    </div>
  );
}

export default GameSnake;