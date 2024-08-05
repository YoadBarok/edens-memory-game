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
    const isCompleted = values.every(
      (square) => square.getClassName === "matched"
    );
    if (isCompleted) {
      setShouldCount(false);
      setShouldShowResult(true);
      for (let i = 0; i < values.length; i++) {
        setTimeout(() => {
          values[i].setContent?.(`🐇`);
        }, i * 100);
      }
    }
  }, [change, setShouldCount, setShouldShowResult, squaresMap]);
};
