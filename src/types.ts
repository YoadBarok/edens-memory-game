import { Dispatch, SetStateAction } from "react";

export type SetStateFunction<T> = Dispatch<SetStateAction<T>>;
export type SquareClasses = "shown" | "hidden" | "matched" | "not-matched";
export type SquareSize = "small" | "big";

export type SelectedSquare = {
  id: string;
  image: string;
  setClassName?: SetStateFunction<SquareClasses>;
} | null;

export type SquareMap = Record<
  string,
  {
    square: JSX.Element;
    setClass?: SetStateFunction<SquareClasses>;
    setContent?: SetStateFunction<string>;
  }
>;

export type CommonFunctionInput = {
  firstSelectedSquare: SelectedSquare;
  secondSelectedSquare: SelectedSquare;
  squaresMap: SquareMap;
  setFirstSelectedSquare: SetStateFunction<SelectedSquare>;
  setSecondSelectedSquare: SetStateFunction<SelectedSquare>;
};
