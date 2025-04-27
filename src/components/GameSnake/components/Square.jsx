import { useSelector } from "react-redux";
import styles from "../GameSnake.module.css";



function Square({square}){

    const {x, y} = square;
const snake= useSelector(store => store.gameSnake.snake);
const apple= useSelector(store => store.gameSnake.apple);

let buttonStyle = '' ;

for(let s of snake){
    if(s.x === x &&  s.y === y) buttonStyle = 'snake';
}

if(x === apple.x &&  y === apple.y) buttonStyle = 'apple';
    return (
        <span  className={styles.Square} >
<button className={styles[buttonStyle]}>

</button>
        </span>
    );
}

export default Square;





