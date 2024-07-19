import "./css/App.css";
import { Board } from "./components/board";
import { chooseImages } from "./utils/images";
import { SquareMapContext } from "./context";
import { useEffect, useState } from "react";
import { SizeSelector } from "./components/sizeSelector";
import { GameModeSelector } from "./components/gameModeSelector";

function App() {
  const [getSelectedSize, setSelectedSize] = useState<number | null>(null);
  const [shouldShowBoard, setShouldShowBoard] = useState(false);
  const [getImages, setImages] = useState<string[] | null>(null);
  const [isGameModeSelected, setIsGameModeSelected] = useState(false);
  const [squaresMap] = useState(new Map());

  useEffect(() => {
    if (getSelectedSize) {
      setShouldShowBoard(true);
      setImages(chooseImages(getSelectedSize));
    }
  }, [getSelectedSize]);

  return (
      <div className="App">
          {!isGameModeSelected && (
              <GameModeSelector setIsGameModeSelected={setIsGameModeSelected} />
          )}
          {!getSelectedSize && isGameModeSelected && (
              <SizeSelector setSelectedSize={setSelectedSize} />
          )}
          {shouldShowBoard && getSelectedSize && getImages && (
              <SquareMapContext.Provider value={squaresMap}>
                  <button
                      className="big-button"
                      onClick={() => window.location.reload()}
                  >
                      🔄
                  </button>
                  <Board size={getSelectedSize} chosenImages={getImages} />
              </SquareMapContext.Provider>
          )}
      </div>
  );
}

export default App;
