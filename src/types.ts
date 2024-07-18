import { Dispatch, SetStateAction } from "react";

export type SetStateFunction<T> = Dispatch<SetStateAction<T>>;
export type SquareClasses =
  | "shown"
  | "shown-eden-mode"
  | "hidden"
  | "matched"
  | "not-matched";
export type SquareSize = "small" | "big";

export type SelectedSquare = {
    id: string;
    image: string;
    setClassName?: SetStateFunction<SquareClasses>;
};

export type NullableSelectedSquare = {
  id: string;
  image: string;
  setClassName?: SetStateFunction<SquareClasses>;
} | null;

export type Square = {
    square: JSX.Element;
    setClass?: SetStateFunction<SquareClasses>;
    getClassName?: SquareClasses;
    setContent?: SetStateFunction<string>;
};

export type SquareMap = Map<string, Square>;

export type CommonFunctionInput = {
    firstSelectedSquare: NullableSelectedSquare;
    secondSelectedSquare: NullableSelectedSquare;
    squaresMap: SquareMap;
    setFirstSelectedSquare: SetStateFunction<NullableSelectedSquare>;
    setSecondSelectedSquare: SetStateFunction<NullableSelectedSquare>;
};

export type GameMode = "standard" | "edenMode";
