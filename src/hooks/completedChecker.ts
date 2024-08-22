import { useEffect } from "react";
import { SetStateFunction, SquareMap } from "../types";

const FINISHED_EMOJI = "🐇";

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

      const timeoutPromises = Array.from(squaresMap.values()).map(
        (square, index) => {
          return new Promise<void>((resolve) => {
            setTimeout(() => {
              square.setContent?.(FINISHED_EMOJI);
              resolve();
            }, index * 100);
          });
        }
      );

      Promise.all(timeoutPromises).then(() => {
        setTimeout(() => {
          setShouldShowResult(true);
        }, 100);
      });
    }
  }, [change, setShouldCount, setShouldShowResult, squaresMap]);
};
