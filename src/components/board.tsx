import { useState, useEffect, useContext } from "react";
import "../css/Board.css";
import { Square } from "./square";
import { SetStateFunction, SquareClasses } from "../types";
import { SquareMapContext } from "../context";

type Props = {
  size: number;
  chosenImages: string[];
};

export const Board = (props: Props) => {
  const squaresMap = useContext(SquareMapContext);
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

  useEffect(() => {
    const checkForMatch = () => {
      if (getFirstSelectedSquare && getSecondSelectedSquare) {
        if (getFirstSelectedSquare.image === getSecondSelectedSquare.image) {
          squaresMap[getFirstSelectedSquare.id].setClass?.("matched");
          squaresMap[getSecondSelectedSquare.id].setClass?.("matched");
        } else {
          setTimeout(() => {
            squaresMap[getFirstSelectedSquare.id].setClass?.("hidden");
            squaresMap[getSecondSelectedSquare.id].setClass?.("hidden");
            squaresMap[getFirstSelectedSquare.id].setContent?.("");
            squaresMap[getSecondSelectedSquare.id].setContent?.("");
          }, 700);
        }
        setFirstSelectedSquare(null);
        setSecondSelectedSquare(null);
      }
    };

    if (getFirstSelectedSquare && getSecondSelectedSquare) {
      checkForMatch();
    }
  }, [getFirstSelectedSquare, getSecondSelectedSquare, squaresMap]);

  const handleClickOnSquare = (id: string) => {
    if (!getFirstSelectedSquare) {
      setFirstSelectedSquare({
        id,
        image: squaresMap[id].square.props.image,
      });
    } else if (!getSecondSelectedSquare) {
      setSecondSelectedSquare({
        id,
        image: squaresMap[id].square.props.image,
      });
    }
  };

  let imageIndex = 0;
  const board = [];

  for (let row = 0; row < props.size; row++) {
    const rowSquares = [];

    for (let col = 0; col < props.size; col++) {
      const squareId = `${row}-${col}`;
      const square = (
        <Square
          sizeClass={props.size === 4 ? "big" : "small"}
          displayClass="hidden"
          handleClick={handleClickOnSquare}
          key={squareId}
          id={squareId}
          image={props.chosenImages[imageIndex++] || ""}
        />
      );
      squaresMap[squareId] = { square };
      rowSquares.push(square);
    }

    board.push(<div key={row}>{rowSquares}</div>);
  }

  return <div className="board">{board}</div>;
};
