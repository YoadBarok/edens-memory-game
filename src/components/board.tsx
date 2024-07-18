import { useState, useContext, useEffect, useCallback } from "react";
import "../css/Board.css";
import { NullableSelectedSquare } from "../types";
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
  const [change, setChange] = useState(0);
  const [getFirstSelectedSquare, setFirstSelectedSquare] =
    useState<NullableSelectedSquare>(null);

  const [getSecondSelectedSquare, setSecondSelectedSquare] =
      useState<NullableSelectedSquare>(null);

  useEffect(() => {
      const values = Array.from(squaresMap.values());
      const isCompleted = values
          .map((k) => k.getClassName === "matched")
          .every((k) => k);
      if (isCompleted) {
        // TODO: do something when completed :)
        let counter = 0;
        squaresMap.forEach((square) => {
            counter++;
            setTimeout(() => {
                square.setContent?.(`👍`);
            }, counter * 100);
        });
      }
  }, [change, squaresMap]);

  const handleChange = useCallback(() => {
    setChange(change+1)
  }, [change])
  
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
