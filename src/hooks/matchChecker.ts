import { useEffect } from "react";
import { SelectedSquare, SetStateFunction, SquareMap } from "../types";

export const useMatchCheckerEffect = ({
  firstSelectedSquare,
  secondSelectedSquare,
  squaresMap,
  setClickEnabled,
  setFirstSelectedSquare,
  setSecondSelectedSquare,
}: {
  firstSelectedSquare: SelectedSquare;
  secondSelectedSquare: SelectedSquare;
  squaresMap: SquareMap;
  setClickEnabled: SetStateFunction<boolean>;
  setFirstSelectedSquare: SetStateFunction<SelectedSquare>;
  setSecondSelectedSquare: SetStateFunction<SelectedSquare>;
}) => {
  useEffect(() => {
    const checkForMatch = () => {
      if (firstSelectedSquare && secondSelectedSquare) {
        if (firstSelectedSquare.image === secondSelectedSquare.image) {
          squaresMap[firstSelectedSquare.id].setClass?.("matched");
          squaresMap[secondSelectedSquare.id].setClass?.("matched");
        } else {
          setClickEnabled(false);
          setTimeout(() => {
            squaresMap[firstSelectedSquare.id].setClass?.("hidden");
            squaresMap[secondSelectedSquare.id].setClass?.("hidden");
            squaresMap[firstSelectedSquare.id].setContent?.("");
            squaresMap[secondSelectedSquare.id].setContent?.("");
            setClickEnabled(true);
          }, 700);
        }
        setFirstSelectedSquare(null);
        setSecondSelectedSquare(null);
      }
    };

    if (firstSelectedSquare && secondSelectedSquare) {
      checkForMatch();
    }
  }, [
    firstSelectedSquare,
    secondSelectedSquare,
    setClickEnabled,
    setFirstSelectedSquare,
    setSecondSelectedSquare,
    squaresMap,
  ]);
};
