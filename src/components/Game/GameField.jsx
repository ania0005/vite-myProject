// src/components/Game/GameField.jsx
import { useDispatch, useSelector } from "react-redux";
import { makeMove } from "../../features/gameSlice";
import "../../index.css";

const GameField = () => {
  const dispatch = useDispatch();
  const cells = useSelector((state) => state.game.items);

  const handleClick = (index) => {
    dispatch(makeMove({ index }));
  };

  return (
    <div>
      <div className="game-field-container">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="element"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameField;


