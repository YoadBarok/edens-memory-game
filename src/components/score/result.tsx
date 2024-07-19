import { useContext } from "react";
import { GameModeContext } from "../../context";

type Props = {
  time: number;
  attempts: number;
  score: number;
  boardSize: number;
};

export const Result = (props: Props) => {
  const gameMode = useContext(GameModeContext);
  return (
    <div className="eden-text">
      <h1>Well done!</h1>
      <h2>Game mode: {gameMode.mode}</h2>
      <h2>
        Board size: {props.boardSize} x {props.boardSize}
      </h2>
      <p>Time: {props.time} seconds</p>
      <p>Attempts: {props.attempts}</p>
      <p>Total Score: {props.score}</p>
    </div>
  );
};
