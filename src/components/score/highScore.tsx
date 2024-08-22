import { useEffect, useState } from "react";
import { getTopTenScores } from "../../services/scoreService";
import { HighScores, Score } from "../../types";
import "../../css/HighScore.css";
type Props = {};

export const HighScore = (props: Props) => {
  const [highScores, setHighScores] = useState<HighScores>({
    four: [],
    six: [],
  });

  useEffect(() => {
    const fetchHighScores = async () => {
      const scores = await getTopTenScores();
      setHighScores(scores);
    };
    fetchHighScores();
  }, []);

  const renderList = (array: Score[]) => {
    return array.map((score: Score, index: number) => (
      <div className="list">
        <p key={index}>{score.rank}.&nbsp; </p>
        <p key={index}>
          {score.name} - {score.value}
        </p>
      </div>
    ));
  };

  return (
    <div className="eden-text">
      <h3>Top 10 Scores:</h3>
      <div className="lists">
        <div className="four-on-four">
          <h4>4x4</h4>
          <div>{renderList(highScores.four)}</div>
        </div>
        <div className="six-on-six">
          <h4>6x6</h4>
          <div>{renderList(highScores.six)}</div>
        </div>
      </div>
    </div>
  );
};
