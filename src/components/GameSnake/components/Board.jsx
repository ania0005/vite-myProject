import Square from "./Square";
import styles from "../GameSnake.module.css";


function Board() {
  
  let squares = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      squares.push({ x, y, index: '' + x + y});
    }
  }

  
  console.log(squares[0].index);
  return (
    <div className={styles.snakeBoard}>
      {squares.map(square => {
        return (
          <span key={square.index}>
            <Square square={square}/>
          </span>
        );
      })}
    </div>
  );
}

export default Board;