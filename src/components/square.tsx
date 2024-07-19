import { useContext, useState } from "react";
import "../css/Square.css";
import { SquareClasses, SquareSize } from "../types";
import { GameModeContext, SquareMapContext } from "../context";
import {
  edenModeSquareClickHandler,
  standardSquareClickHandler,
} from "../utils/handleClicks";
import { GAME_MODES } from "../constants/gameModes";

type Props = {
  id: string;
  image: string;
  handleClick: (id: string) => void;
  displayClass: SquareClasses;
  sizeClass: SquareSize;
  clickable: boolean;
};

export const Square = (props: Props) => {
  const gameMode = useContext(GameModeContext);
  const squareMap = useContext(SquareMapContext);
  const [getContent, setContent] = useState("");
  const [getClassName, setClassName] = useState<SquareClasses>(
    props.displayClass
  );
  squareMap[props.id].setClass = setClassName;
  squareMap[props.id].setContent = setContent;

  const onClick = () => {
    if (gameMode.mode === GAME_MODES.standard) {
      standardSquareClickHandler({
        setContent,
        setClassName,
        handleClick: props.handleClick,
        clickable: props.clickable,
        image: props.image,
        id: props.id,
      });
    }
    if (gameMode.mode === GAME_MODES.edenMode) {
      edenModeSquareClickHandler({
        content: getContent,
        className: getClassName,
        setContent,
        setClassName,
        image: props.image,
      });
    }
  };

  return (
    <div
      className={`square ${props.sizeClass}-square ${getClassName}`}
      onClick={onClick}
    >
      <p>{getContent}</p>
    </div>
  );
};
