import { useState, useContext } from "react";
import "../css/Board.css";
import { SelectedSquare } from "../types";
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
  const [getFirstSelectedSquare, setFirstSelectedSquare] =
    useState<SelectedSquare | null>(null);

  const [getSecondSelectedSquare, setSecondSelectedSquare] =
    useState<SelectedSquare | null>(null);

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
