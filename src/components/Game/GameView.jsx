// src/components/Game/GameView.jsx
import { Button } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import GameField from "./GameField";
import React, { useState } from "react";
import "../../index.css";
import Header from "./Header";
import { resetGame } from "../../features/gameSlice";

const GameView = () => {
  const dispatch = useDispatch();
  const winner = useSelector((state) => state.game.winner);

  const handleActionClick = () => {
    dispatch(resetGame());
  };

  return (
    <div>
      <Header />
      <div className="game-container">
        <div className="actionButtons">
          <Button
            className="actionBtn"
            text="Start / Reset"
            onClick={() => handleActionClick()}
            intent="primary"
          />
        </div>
        <div className="game">
          {winner && <div className="winner-message">{winner}</div>}
          <GameField />
        </div>
      </div>
    </div>
  );
};

export default GameView;
