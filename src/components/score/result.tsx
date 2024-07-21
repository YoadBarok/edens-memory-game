import "../../css/Result.css";

type Props = {
  time: number;
  attempts: number;
  score: number;
  boardSize: number;
};

export const Result = (props: Props) => {
  return (
    <div className="result">
      <h4>Well done!</h4>
      <p>Time: {props.time} seconds</p>
      <p>Attempts: {props.attempts}</p>
      <p>Total Score: {props.score}</p>
    </div>
  );
};
