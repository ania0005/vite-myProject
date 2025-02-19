import { useSelector, useDispatch } from "react-redux";
import { changeStatus, moveSnake, setDirection, checkApple, checkGameOver} from "../../../features/gameSnakeSlice";
import { useRef } from "react";
import "../../../App.css";  


function Status() {

  const status = useSelector((store) => store.gameSnake.status);
  const dispatch = useDispatch();

  let timer = useRef(null);

  const update = () => {
    dispatch(moveSnake());
    dispatch(setDirection());
    dispatch(checkApple());
    dispatch(checkGameOver());
  };

  const startTimer = () => (timer.current = setInterval(() => update(), 200));
  const stopTimer = () => clearInterval(timer.current);

  const clickHandler = () => {
    if (status === "Restart") {
      window.location.reload();
      return;
    }
    if (status !== "Pause") startTimer();
    else stopTimer();
    dispatch(changeStatus());
  };
  return (
    <div className="Status">
    <button className="start-button" onClick={clickHandler}>
      {status}
    </button>
    </div>
  );
}
export default Status;