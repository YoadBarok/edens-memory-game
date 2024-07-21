import "./css/App.css";
import { Board } from "./components/board";
import { chooseImages } from "./utils/images";
import { SquareMapContext } from "./context";
import { useEffect, useState } from "react";
import { SizeSelector } from "./components/selectors/sizeSelector";
import { GameModeSelector } from "./components/selectors/gameModeSelector";
import { Result } from "./components/score/result";
import { calculateScore } from "./utils/calculateScore";
import { ResetButton } from "./components/resetButton";

function App() {
  const [getAttemptCount, setAttemptCount] = useState(0);
  const [getTime, setTime] = useState(0);
  const [getSelectedSize, setSelectedSize] = useState<number | null>(null);
  const [shouldShowBoard, setShouldShowBoard] = useState(false);
  const [getImages, setImages] = useState<string[] | null>(null);
  const [isGameModeSelected, setIsGameModeSelected] = useState(false);
  const [squaresMap] = useState(new Map());
  const [isGameCompleted, setGameCompleted] = useState(false);
  const [shouldShowResult, setShouldShowResult] = useState(false);
  const [getScore, setScore] = useState(0);

  useEffect(() => {
    if (getSelectedSize) {
      setShouldShowBoard(true);
      setImages(chooseImages(getSelectedSize));
    }
  }, [getSelectedSize]);

  useEffect(() => {
    if (isGameCompleted) {
      setScore(calculateScore(getTime, getAttemptCount));
      setShouldShowBoard(false);
      setShouldShowResult(true);
    }
  }, [isGameCompleted, getAttemptCount, getTime]);

  return (
    <div className="App">
      {!isGameModeSelected && (
        <GameModeSelector setIsGameModeSelected={setIsGameModeSelected} />
      )}
      {!getSelectedSize && isGameModeSelected && (
        <SizeSelector setSelectedSize={setSelectedSize} />
      )}
      {shouldShowBoard && getSelectedSize && getImages?.length && (
        <SquareMapContext.Provider value={squaresMap}>
          <ResetButton />
          <Board
            setGameCompleted={setGameCompleted}
            size={getSelectedSize}
            chosenImages={getImages}
            attempts={{ getAttemptCount, setAttemptCount }}
            time={{ getTime, setTime }}
          />
        </SquareMapContext.Provider>
      )}
      {shouldShowResult && (
        <div className="result">
          <ResetButton />
          <Result
            time={getTime}
            attempts={getAttemptCount}
            score={getScore}
            boardSize={getSelectedSize!}
          />
        </div>
      )}
    </div>
  );
}

export default App;
