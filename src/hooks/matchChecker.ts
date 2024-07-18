import { useEffect } from "react";
import { NullableSelectedSquare, SelectedSquare, SetStateFunction, SquareMap } from "../types";

export const useMatchCheckerEffect = ({
    firstSelectedSquare,
    secondSelectedSquare,
    squaresMap,
    setClickEnabled,
    setFirstSelectedSquare,
    setSecondSelectedSquare,
    handleChange,
}: {
    firstSelectedSquare: NullableSelectedSquare;
    secondSelectedSquare: NullableSelectedSquare;
    squaresMap: SquareMap;
    setClickEnabled: SetStateFunction<boolean>;
    setFirstSelectedSquare: SetStateFunction<NullableSelectedSquare>;
    setSecondSelectedSquare: SetStateFunction<NullableSelectedSquare>;
    handleChange: CallableFunction;
}) => {
    useEffect(() => {
        const checkForMatch = (
            firstSquare: SelectedSquare,
            secondSquare: SelectedSquare
        ) => {
            const { id: firstSquareId, image: firstSquareImage } = firstSquare;
            const { id: secondSquareId, image: secondsSquareImage } =
                secondSquare;
            const firstSquareFromMap = squaresMap.get(firstSquareId);
            const secondSquareFromMap = squaresMap.get(secondSquareId);
            if (!firstSquareFromMap || !secondSquareFromMap) {
                return;
            }
            const isSameImage = firstSquareImage === secondsSquareImage;
            if (isSameImage) {
                firstSquareFromMap.setClass?.("matched");
                secondSquareFromMap.setClass?.("matched");
            } else {
                setClickEnabled(false);
                setTimeout(() => {
                    firstSquareFromMap.setClass?.("hidden");
                    secondSquareFromMap.setClass?.("hidden");
                    firstSquareFromMap.setContent?.("");
                    secondSquareFromMap.setContent?.("");
                    setClickEnabled(true);
                }, 700);
            }
            setFirstSelectedSquare(null);
            setSecondSelectedSquare(null);
            handleChange();
        };

        if (firstSelectedSquare && secondSelectedSquare) {
            checkForMatch(firstSelectedSquare, secondSelectedSquare);
        }
    }, [
        firstSelectedSquare,
        secondSelectedSquare,
        setClickEnabled,
        setFirstSelectedSquare,
        setSecondSelectedSquare,
        squaresMap,
        handleChange,
    ]);
};
