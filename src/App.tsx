import "./css/App.css";
import { Board } from "./components/board";
import { chooseImages } from "./utils/images";
import { SquareMapContext } from "./context";
import { useEffect, useState } from "react";
import { SizeSelector } from "./components/selectors/sizeSelector";
import { GameModeSelector } from "./components/selectors/gameModeSelector";
import { ResetButton } from "./components/resetButton";
import { fetchImages as fetchImagesFromBackend } from "./services/imagesService";

function App() {
  const [getAttemptCount, setAttemptCount] = useState(0);
  const [getTime, setTime] = useState(0);
  const [getSelectedSize, setSelectedSize] = useState<number | null>(null);
  const [shouldShowBoard, setShouldShowBoard] = useState(false);
  const [getImages, setImages] = useState<string[] | null>(null);
  const [isGameModeSelected, setIsGameModeSelected] = useState(false);
  const [squaresMap] = useState(new Map());
  const [isGameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    const fetchAndSetImages = async () => {
      if (getSelectedSize) {
        const images = await fetchImagesFromBackend();
        const chosenImages = chooseImages(getSelectedSize, images);

        setImages(chosenImages);
        setShouldShowBoard(true);
      }
    };

    fetchAndSetImages();
  }, [getSelectedSize]);

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
          <div className="main-frame">
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
    </div>
  );
}

export default App;
