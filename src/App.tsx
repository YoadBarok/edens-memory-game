import "./css/App.css";
import { Board } from "./components/board";
import { chooseImages } from "./utils/images";
import { SquareMapContext } from "./context";
import { useEffect, useState } from "react";
import { SizeSelector } from "./components/selectors/sizeSelector";
import { GameModeSelector } from "./components/selectors/gameModeSelector";
import { ResetButton } from "./components/resetButton";
import { fetchImages } from "./services/imagesService";
import { Result } from "./components/score/result";
import { calculateScore } from "./utils/calculateScore";
import { HighScore } from "./components/score/highScore";
import { Spinner } from "./components/spinner";
import { getTopTenScores } from "./services/scoreService";
import { HighScores } from "./types";

function App() {
  const [getAttemptCount, setAttemptCount] = useState(0);
  const [getTime, setTime] = useState(0);
  const [getSelectedSize, setSelectedSize] = useState<number | null>(null);
  const [shouldShowBoard, setShouldShowBoard] = useState(false);
  const [getImages, setImages] = useState<string[] | null>(null);
  const [isGameModeSelected, setIsGameModeSelected] = useState(false);
  const [squaresMap] = useState(new Map());
  const [isGameCompleted, setGameCompleted] = useState(false);
  const [highScores, setHighScores] = useState<HighScores>({
    four: [],
    six: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const screenSize = window.screen.width;

  useEffect(() => {
    const fetchHighScores = async () => {
      const scores = await getTopTenScores();
      setHighScores(scores);
      setIsLoading(false);
    };
    fetchHighScores();
  }, []);

  useEffect(() => {
    const fetchAndSetImages = async () => {
      if (getSelectedSize) {
        const images = await fetchImages();
        const chosenImages = chooseImages(getSelectedSize, images);

        setImages(chosenImages);
        setShouldShowBoard(true);
      }
    };

    fetchAndSetImages();
  }, [getSelectedSize]);

  return (
    <div className="App">
      <div className={`spinner ${!isLoading && "fade-out"}`}>
        <Spinner width={screenSize < 400 ? "100" : "165"} strokeWidth="4" />
      </div>
      <div className={`main ${!isLoading && "fade-in"}`}>
        {!isGameModeSelected && (
          <div>
            <div className="mode-selector">
              <GameModeSelector setIsGameModeSelected={setIsGameModeSelected} />
            </div>
            <div className="score-board">
              <HighScore four={highScores.four} six={highScores.six} />
            </div>
          </div>
        )}
        {!getSelectedSize && isGameModeSelected && (
          <SizeSelector setSelectedSize={setSelectedSize} />
        )}
        {shouldShowBoard &&
          getSelectedSize &&
          getImages?.length &&
          !isGameCompleted && (
            <SquareMapContext.Provider value={squaresMap}>
              <div className="board-frame">
                <ResetButton />
                <Board
                  setGameCompleted={setGameCompleted}
                  isGameCompleted={isGameCompleted}
                  size={getSelectedSize}
                  chosenImages={getImages}
                  attempts={{ getAttemptCount, setAttemptCount }}
                  time={{ getTime, setTime }}
                />
              </div>
            </SquareMapContext.Provider>
          )}
        {isGameCompleted && (
          <div className="post-game">
            <ResetButton />
            <Result
              time={getTime}
              attempts={getAttemptCount}
              score={calculateScore(getTime, getAttemptCount)}
              boardSize={getSelectedSize || 0}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
