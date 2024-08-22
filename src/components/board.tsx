import { useState, useContext, useCallback, useEffect } from "react";
import "../css/Board.css";
import { GameModeContext, SquareMapContext } from "../context";
import { useMatchCheckerEffect } from "../hooks/matchChecker";
import { renderBoard } from "../utils/renderBoard";
import { Nullable, SelectedSquare, SetStateFunction } from "../types";
import { useCompletedCheckerEffect } from "../hooks/completedChecker";
import { GAME_MODES } from "../constants/gameModes";
import { Counter } from "./score/counter";
import { Timer } from "./score/timer";

type Props = {
  size: number;
  chosenImages: string[];
  attempts: {
    getAttemptCount: number;
    setAttemptCount: SetStateFunction<number>;
  };
  time: {
    getTime: number;
    setTime: SetStateFunction<number>;
  };
  setGameCompleted: SetStateFunction<boolean>;
  isGameCompleted: boolean;
};

export const Board = (props: Props) => {
  const { getAttemptCount, setAttemptCount } = props.attempts;
  const { getTime, setTime } = props.time;
  const { setGameCompleted: setShouldShowResult, isGameCompleted } = props;
  const [shouldCount, setShouldCount] = useState(false);

  const gameMode = useContext(GameModeContext);
  const squaresMap = useContext(SquareMapContext);
  const [isClickEnabled, setClickEnabled] = useState(true);
  const [change, setChange] = useState(0);
  const [getFirstSelectedSquare, setFirstSelectedSquare] =
    useState<Nullable<SelectedSquare>>(null);

  const [getSecondSelectedSquare, setSecondSelectedSquare] =
    useState<Nullable<SelectedSquare>>(null);

  useEffect(() => {
    if (getFirstSelectedSquare && !shouldCount) {
      setShouldCount(true);
    }
  }, [getFirstSelectedSquare, shouldCount]);

  const handleUpdate = useCallback(() => {
    setAttemptCount(getAttemptCount + 1);
  }, [getAttemptCount, setAttemptCount]);

  const handleChange = useCallback(() => {
    setChange(change + 1);
    handleUpdate();
  }, [change, handleUpdate]);

  useCompletedCheckerEffect({
    change,
    squaresMap,
    setShouldCount,
    setShouldShowResult,
  });

  useMatchCheckerEffect({
    firstSelectedSquare: getFirstSelectedSquare,
    secondSelectedSquare: getSecondSelectedSquare,
    squaresMap,
    setClickEnabled,
    setFirstSelectedSquare,
    setSecondSelectedSquare,
    handleChange,
  });

  const board = renderBoard({
    size: props.size,
    isClickEnabled,
    firstSelectedSquare: getFirstSelectedSquare,
    secondSelectedSquare: getSecondSelectedSquare,
    squaresMap,
    setFirstSelectedSquare,
    setSecondSelectedSquare,
    chosenImages: props.chosenImages,
  });

  return (
    <div>
      <div>
        <div className="board">{board}</div>
      </div>
      <div>
        {gameMode.mode === GAME_MODES.standard && (
          <div>
            {!isGameCompleted && (
              <div>
                <Counter counter={getAttemptCount} />
                <Timer
                  getTime={getTime}
                  setTime={setTime}
                  shouldCount={shouldCount}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
