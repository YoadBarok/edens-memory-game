import { HighScores, Score } from "../../types";
import "../../css/HighScore.css";

export const HighScore = ({ four, six }: HighScores) => {
  const renderList = (array: Score[]) => {
    return array.map((score: Score, index: number) => (
      <p className="row" key={index}>
        {score.rank}.&nbsp;{score.name} - {score.value}
      </p>
    ));
  };

  return (
    <div className="eden-text">
      <div>
        <h3>top 10 scores:</h3>
        <div className="lists">
          <div className="four-on-four">
            <h4>4x4</h4>
            <div>{renderList(four)}</div>
          </div>
          <div className="six-on-six">
            <h4>6x6</h4>
            <div>{renderList(six)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
