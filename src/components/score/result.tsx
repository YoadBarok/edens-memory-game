import { useState } from "react";
import "../../css/Result.css";
import { createScore, getRank } from "../../services/scoreService";
import { SaveScoreForm } from "./saveScoreForm";

type Props = {
  time: number;
  attempts: number;
  score: number;
  boardSize: number;
};

export const Result = (props: Props) => {
  const [rank, setRank] = useState<number | null>(null);
  const saveScore = async (name: string) => {
    const score = await createScore({
      name,
      value: props.score,
      boardSize: props.boardSize,
    });

    if (score) {
      const rank = await getRank(score.id);
      setRank(rank.rank);
    }
  };

  return (
    <div className="result">
      <h4>Well done!</h4>
      <p>Time: {props.time} seconds</p>
      <p>Attempts: {props.attempts}</p>
      <p>Total Score: {props.score}</p>
      <p>
        Board Size: {props.boardSize}x{props.boardSize}
      </p>
      {!rank && <SaveScoreForm saveScore={saveScore} />}
      {rank && (
        <h5>
          You ranked: {rank} in {props.boardSize} x {props.boardSize}!
        </h5>
      )}
    </div>
  );
};
