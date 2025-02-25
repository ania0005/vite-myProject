import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Game.css";
import { Button } from "@blueprintjs/core";
import { setSelectedFirstPlayer, setPlayer } from "../../features/gameSlice";

const Header = () => {
  const dispatch = useDispatch();
  const selectedFirstPlayer =useSelector((state) => state.game.selectedFirstPlayer);
 
  const handleSelectFirstPlayer = (player) => { 
    dispatch(setSelectedFirstPlayer(player));
    dispatch(setPlayer(player)); 
  };
  

  return (
    <div className="header-container">
      <Button
        className="playerBtn"
        style={{
          backgroundColor: selectedFirstPlayer === "X" ? "#0077cc" : "white",
          color: selectedFirstPlayer === "X" ? "white" : "black",
        }}
        onClick={() => handleSelectFirstPlayer("X")}
      >
        Set Player X
      </Button>
      <Button
        className="playerBtn"
        style={{
          backgroundColor: selectedFirstPlayer === "O" ? "#0077cc" : "white",
          color: selectedFirstPlayer === "O" ? "white" : "black",
        }}
        onClick={() => handleSelectFirstPlayer("O")}
      >
        Set Player O
      </Button>
    </div>
  );
};

export default Header;



