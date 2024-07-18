import { useState, useContext } from "react";
import "../css/Board.css";
import { SetStateFunction, SquareClasses } from "../types";
import { SquareMapContext } from "../context";
import { useMatchCheckerEffect } from "../hooks/matchChecker";
import { renderBoard } from "../utils/renderBoard";

type Props = {
  size: number;
  chosenImages: string[];
};

export const Board = (props: Props) => {
  const squaresMap = useContext(SquareMapContext);
  const [isClickEnabled, setClickEnabled] = useState(true);
  const [getFirstSelectedSquare, setFirstSelectedSquare] = useState<{
    id: string;
    image: string;
    setClassName?: SetStateFunction<SquareClasses>;
  } | null>(null);

  const [getSecondSelectedSquare, setSecondSelectedSquare] = useState<{
    id: string;
    image: string;
    setClassName?: SetStateFunction<SquareClasses>;
  } | null>(null);

  useMatchCheckerEffect({
    firstSelectedSquare: getFirstSelectedSquare,
    secondSelectedSquare: getSecondSelectedSquare,
    squaresMap,
    setClickEnabled,
    setFirstSelectedSquare,
    setSecondSelectedSquare,
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

  return <div className="board">{board}</div>;
};
