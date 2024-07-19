import { useState, useContext, useCallback } from "react";
import "../css/Board.css";
import { SquareMapContext } from "../context";
import { useMatchCheckerEffect } from "../hooks/matchChecker";
import { renderBoard } from "../utils/renderBoard";
import { Nullable, SelectedSquare } from "../types";
import { useCompletedCheckerEffect } from "../hooks/completedChecker";

type Props = {
  size: number;
  chosenImages: string[];
};

export const Board = (props: Props) => {
  const squaresMap = useContext(SquareMapContext);
  const [isClickEnabled, setClickEnabled] = useState(true);
  const [change, setChange] = useState(0);
  const [getFirstSelectedSquare, setFirstSelectedSquare] =
      useState<Nullable<SelectedSquare>>(null);

  const [getSecondSelectedSquare, setSecondSelectedSquare] =
      useState<Nullable<SelectedSquare>>(null);

  const handleChange = useCallback(() => {
    setChange(change+1)
  }, [change])

  useCompletedCheckerEffect({
     change, squaresMap,
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

  return <div className="board">{board}</div>;
};
