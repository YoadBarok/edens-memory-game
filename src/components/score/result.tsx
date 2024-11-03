import { useEffect, useState } from "react";
import "../../css/Result.css";
import { createScore, getRank } from "../../services/scoreService";
import { SaveScoreForm } from "./saveScoreForm";

type Props = {
  time: number;
  attempts: number;
  score: number;
  boardSize: number;
};

export const Result = ({ time, attempts, score, boardSize }: Props) => {
  const [rank, setRank] = useState<number | null>(null);
  const [savedScoreMessage, setSavedScoreMessage] = useState<string | null>(
    null
  );
  const [isHighScore, setIsHighScore] = useState<boolean>(false);

  useEffect(() => {
    const checkRank = async () => {
      setRank((await getRank(boardSize, score)).rank);
      if (rank && rank <= 10) {
        setIsHighScore(true);
      }
    };

    checkRank();
  }, [boardSize, score, rank]);

  const saveScore = async (name: string) => {
    const newScore = await createScore({
      name,
      value: score,
      boardSize: boardSize,
    });
    newScore && setSavedScoreMessage("Score saved!");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="result">
      {isHighScore && <h4>Well done!</h4>}
      <h5>
        You ranked: {rank}
        {rank === 1
          ? "st"
          : rank === 2
          ? "nd"
          : rank === 3
          ? "rd"
          : "th"} in {boardSize} x {boardSize}!
      </h5>
      <p>Time: {time} seconds</p>
      <p>Attempts: {attempts}</p>
      <p>Total Score: {score}</p>
      <p>
        Board Size: {boardSize}x{boardSize}
      </p>

      {isHighScore && (
        <div>
          {savedScoreMessage ? (
            <p>{savedScoreMessage}</p>
          ) : (
            <SaveScoreForm saveScore={saveScore} />
          )}
        </div>
      )}
    </div>
  );
};
