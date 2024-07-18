import { Square } from "../components/square";
import { CommonFunctionInput } from "../types";
import { clickHandler } from "./handleClicks";

export const renderBoard = ({
  size,
  isClickEnabled,
  firstSelectedSquare,
  secondSelectedSquare,
  squaresMap,
  setFirstSelectedSquare,
  setSecondSelectedSquare,
  chosenImages,
}: {
  size: number;
  isClickEnabled: boolean;
  chosenImages: string[];
} & CommonFunctionInput) => {
  let imageIndex = 0;
  const board = [];

  for (let row = 0; row < size; row++) {
    const rowSquares = [];

    for (let col = 0; col < size; col++) {
      const squareId = `${row}-${col}`;
      const square = (
        <Square
          clickable={isClickEnabled}
          sizeClass={size === 4 ? "big" : "small"}
          displayClass="hidden"
          handleClick={(id: string) =>
            clickHandler({
              id,
              firstSelectedSquare,
              secondSelectedSquare,
              squaresMap,
              setFirstSelectedSquare,
              setSecondSelectedSquare,
            })
          }
          key={squareId}
          id={squareId}
          image={chosenImages[imageIndex++] || ""}
        />
      );
      squaresMap[squareId] = { square };
      rowSquares.push(square);
    }

    board.push(<div key={row}>{rowSquares}</div>);
  }

  return board;
};
