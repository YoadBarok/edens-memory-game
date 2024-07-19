import { useEffect } from "react";
import { SetStateFunction, SquareMap } from "../types";

export const useCompletedCheckerEffect = ({
  change,
  squaresMap,
  setShouldCount,
  setShouldShowResult,
}: {
  change: number;
  squaresMap: SquareMap;
  setShouldCount: SetStateFunction<boolean>;
  setShouldShowResult: SetStateFunction<boolean>;
}) => {
  useEffect(() => {
    const values = Array.from(squaresMap.values());
    const isCompleted = values.every((k) => k.getClassName === "matched");
    if (isCompleted) {
      setShouldCount(false);
      setShouldShowResult(true);
      let counter = 0;
      squaresMap.forEach((square) => {
        counter++;
        setTimeout(() => {
          square.setContent?.(`👍`);
        }, counter * 100);
      });
    }
  }, [change, setShouldCount, setShouldShowResult, squaresMap]);
};
