import { useEffect } from "react";
import { Nullable, SelectedSquare, SetStateFunction, SquareMap } from "../types";

export const useMatchCheckerEffect = ({
    firstSelectedSquare,
    secondSelectedSquare,
    squaresMap,
    setClickEnabled,
    setFirstSelectedSquare,
    setSecondSelectedSquare,
    handleChange,
}: {
    firstSelectedSquare: Nullable<SelectedSquare>;
    secondSelectedSquare: Nullable<SelectedSquare>;
    squaresMap: SquareMap;
    setClickEnabled: SetStateFunction<boolean>;
    setFirstSelectedSquare: SetStateFunction<Nullable<SelectedSquare>>;
    setSecondSelectedSquare: SetStateFunction<Nullable<SelectedSquare>>;
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
