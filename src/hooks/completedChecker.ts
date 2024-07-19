import { useEffect } from "react";
import { SquareMap } from "../types";

export const useCompletedCheckerEffect = ({ change, squaresMap }: { change: number, squaresMap: SquareMap }) => {
    useEffect(() => {
        const values = Array.from(squaresMap.values());
        const isCompleted = values.every((k) => k.getClassName === "matched");
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
};