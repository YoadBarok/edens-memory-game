import { CommonFunctionInput } from "../types";

export const clickHandler = ({
  id,
  firstSelectedSquare,
  secondSelectedSquare,
  squaresMap,
  setFirstSelectedSquare,
  setSecondSelectedSquare,
}: {
  id: string;
} & CommonFunctionInput) => {
  if (!firstSelectedSquare) {
    setFirstSelectedSquare({
      id,
      image: squaresMap[id].square.props.image,
    });
  } else if (!secondSelectedSquare) {
    setSecondSelectedSquare({
      id,
      image: squaresMap[id].square.props.image,
    });
  }
};
