import { GameMode, SetStateFunction } from "../../types";
import "../../css/GameModeSelector.css";
import { useContext } from "react";
import { GameModeContext } from "../../context";
import { GAME_MODES } from "../../constants/gameModes";

type Props = {
  setIsGameModeSelected: SetStateFunction<boolean>;
};

export const GameModeSelector = (props: Props) => {
  const setGameMode = (mode: GameMode) => {
    props.setIsGameModeSelected(true);
    gameMode.mode = mode;
  };

  const gameMode = useContext(GameModeContext);

  return (
    <div className="game-mode-selector">
      <h2>Select Game Mode:</h2>
      <div className="game-mode-buttons">
        <button
          className="game-mode-button"
          onClick={() => setGameMode(GAME_MODES.standard)}
        >
          Standard
        </button>
        <button
          className="game-mode-button"
          onClick={() => setGameMode(GAME_MODES.edenMode)}
        >
          Eden's mode
        </button>
      </div>
    </div>
  );
};
